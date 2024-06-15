import { sql } from "@vercel/postgres";
import { Member } from "../shared/interfaces/member_interface";


export async function fetchAllMembers() {
    const results = await sql`SELECT * FROM members ORDER BY member_id;`
    return results;
}

export async function fetchAMember(memberId: string) {
    const result = await sql`SELECT * FROM members WHERE member_id = ${memberId};`
    return result;
}

export async function postAMember(memberData: Member) {
    await sql`INSERT INTO members (member_id, prefix, suffix, first_name, middle_name, last_name, known_name, gender, birth_date) VALUES (${memberData.memberId.trim()}, ${memberData.prefix.trim()}, ${memberData.suffix.trim()}, ${memberData.firstName.trim()}, ${memberData.middleName.trim()}, ${memberData.lastName.trim()}, ${memberData.knownName.trim()}, ${memberData.gender.trim()}, to_date(
      ${memberData.birthDate.trim()},'MM-DD-YYYY'));`;
}

export async function deleteAMember(memId: string, lName: string, dob: string) {
    await sql`DELETE FROM members WHERE member_id = ${memId} AND last_name = ${lName} AND birth_date = to_date(${dob.trim()}, 'MM-DD-YYYY');`
}