import { fetchAMember } from "@/app/lib/data";
import { Member } from "@/app/shared/interfaces/member_interface";
import { NextResponse } from "next/server";
import moment from "moment";

export async function GET(
    { params }: { params: { slug: string } }
) {
    if (!params.slug || params.slug == '')
        return NextResponse.json("memberId parameter is empty or invalid", { status: 400 });

    try {
        const fetchedMember = await fetchAMember(params.slug.trim());
        const rowsMember = fetchedMember.rows;

        if (fetchedMember.rowCount == 0)
            return NextResponse.json("No member found.", { status: 404 })

        const member: Member = {
            memberId: rowsMember[0].member_id,
            prefix: rowsMember[0].prefix,
            suffix: rowsMember[0].suffix,
            firstName: rowsMember[0].first_name,
            middleName: rowsMember[0].middle_name,
            lastName: rowsMember[0].last_name,
            knownName: rowsMember[0].known_name,
            gender: rowsMember[0].gender,
            birthDate: moment(rowsMember[0].birth_date).utc().format("MM-DD-YYYY")
        }

        return NextResponse.json({ member }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
