import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/mongodb';

export async function POST(request, { params }) {
    const { username, password } = request.json()
    const client = await clientPromise
    const db = client.db()

    const user = await db.collection('users').findOne({ username })

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' })
      return NextResponse.json({ token })
    } else {
      return NextResponse.json({ error: 'Invalid username or password' })
    }
}