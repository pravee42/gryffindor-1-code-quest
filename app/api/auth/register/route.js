import {MongoClient} from 'mongodb';
import bcrypt from 'bcrypt';
import {NextResponse} from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function POST(request, { params }) {
    const {username, password} = request.json();
  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection('users').findOne({username});

  if (existingUser) {
    return NextResponse.json({error: 'Username already exists'});
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await db
      .collection('users')
      .insertOne({username, password: hashedPassword, score: 0});
    return NextResponse.json({message: 'Registration successful'});
  }
}
