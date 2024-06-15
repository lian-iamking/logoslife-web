import { fetchAllMembers } from '@/app/lib/data';
import { Member } from '@/app/shared/interfaces/member_interface';
import moment from 'moment';
import { NextResponse } from 'next/server';

export async function GET() {
  // const queryParams = {
  //   gender: req.nextUrl.searchParams.get("gender")?.trim().toUpperCase()
  // }
  const fetchedMembers = await fetchAllMembers();
  const rowsMembers = fetchedMembers.rows;

  var members: Member[] = [];
  rowsMembers.forEach(member => {
    const tempMember: Member = {
      memberId: member.member_id,
      prefix: member.prefix,
      suffix: member.suffix,
      firstName: member.first_name,
      middleName: member.middle_name,
      lastName: member.last_name,
      knownName: member.known_name,
      gender: member.gender,
      birthDate: moment(member.birth_date).utc().format("MM-DD-YYYY")
    }
    members.push(tempMember);
  })

  return NextResponse.json({ members }, { status: 200 });
}