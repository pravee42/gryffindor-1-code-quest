import {NextResponse} from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function POST(request, {params}) {
  const client = await clientPromise;
  const db = client.db();

  const users = await db.collection('users').find().sort({score: -1}).toArray();
  return NextResponse.json({users});
}
