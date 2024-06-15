import { deleteAMember, fetchAMember, postAMember } from '@/app/lib/data';
import { Member } from '@/app/shared/interfaces/member_interface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const reqJson: Member = await req.json();
  if (!reqJson.memberId || reqJson.memberId == '')
    return NextResponse.json( "memberId is required.", { status: 400 })
  if (!reqJson.firstName || reqJson.firstName == '')
    return NextResponse.json( "firstName is required.", { status: 400 })
  if (!reqJson.lastName || reqJson.lastName == '')
    return NextResponse.json( "lastName is required.", { status: 400 })
  if (!reqJson.gender || reqJson.gender == '')
    return NextResponse.json( "gender is required.", { status: 400 })
  if (!reqJson.birthDate || reqJson.birthDate == '')
    return NextResponse.json( "birthDate is required.", { status: 400 })
  if (!reqJson.middleName)
    reqJson.middleName =''
  if (!reqJson.prefix)
    reqJson.prefix = '';
  if (!reqJson.suffix)
    reqJson.suffix = '';
  if (!reqJson.knownName)
    reqJson.knownName = '';

  try {
    const fetchedMember = await fetchAMember(reqJson.memberId.trim());
    const rowCountMember = fetchedMember.rowCount;
    
    if (rowCountMember > 0)
      return NextResponse.json("Member already exist.", { status: 409 });

    await postAMember(reqJson);

    return NextResponse.json({"Member is created.": reqJson}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const reqJson = await req.json();
  if (!reqJson.memberId || reqJson.memberId == '')
    return NextResponse.json( "memberId is required.", { status: 400 })
  if (!reqJson.lastName || reqJson.lastName == '')
    return NextResponse.json( "lastName is required.", { status: 400 })
  if (!reqJson.birthDate || reqJson.birthDate == '')
    return NextResponse.json( "birthDate is required.", { status: 400 })

  try {
    await deleteAMember(reqJson.memberId.trim(), reqJson.lastName.trim(), reqJson.birthDate.trim())

    return NextResponse.json({"Member is deleted":reqJson}, {status: 200})
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
