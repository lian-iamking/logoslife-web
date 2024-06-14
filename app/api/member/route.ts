import { Member } from '@/app/shared/interfaces/member_interface';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({});
}

export async function POST(req: Request) {
  const member: Member = await req.json();
  console.log(member.memberId);

  try {
    // const result = await sql`INSERT INTO members (member_id, prefix, suffix, first_name, middle_name, last_name, known_name, gender, birth_date) VALUES ('${member.memberId}', '${member.prefix}', '${member.suffix}', '${member.firstName}', '${member.middleName}', '${member.lastName}', '${member.knownName}', '${member.gender}', CURRENT_DATE);`;
    const result =
      await sql`INSERT INTO members (member_id, prefix, suffix, first_name, middle_name, last_name, known_name, gender, birth_date) VALUES (${member.memberId}, '', '', ${member.firstName}, ${member.middleName}, ${member.lastName}, ${member.knownName}, ${member.gender}, CURRENT_DATE);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
