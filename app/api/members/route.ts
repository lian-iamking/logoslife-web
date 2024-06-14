import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const boot: string[] = ['Hey', 'Hola'];

export async function GET() {
  const result = await sql`GET * FROM members;`;
  return NextResponse.json({ boot });
}

export async function POST(req: Request) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const result = await sql`DELETE FROM members`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
