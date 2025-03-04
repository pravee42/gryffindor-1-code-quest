import axios from 'axios';
import clientPromise from '../../../lib/mongodb';
import questions from '../../../lib/questions'; // Import your questions
import {NextResponse} from 'next/server';

export async function POST(request, {params}) {
  const {message} = request.body;
  let points = 0;
  const resArray = [];
  const systemMessage =
    "I want you to act as a Cooking expert... You are required to answer the questions that are related to cooking forget rest everything if anythning asked to you which is not related to cooking  you need to reply with i don't know. Only i don't know.";

  try {
    for (const question of questions) {
      const payload = {
        messages: [
          {role: 'system', content: systemMessage},
          {role: 'user', content: message + question},
        ],
      };

      const response = await axios.post(process.env.AI_API_URL, payload, {
        headers: {
          Authorization: `Bearer ${process.env.AI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const aiMessage = response.data.result.response;
      resArray.push(aiMessage);
      if (!/i don'?t know/i.test(aiMessage)) {
        points += 1;
      }
    }

    const client = await clientPromise;
    const db = client.db();

    if (req.user) {
      await db
        .collection('users')
        .updateOne({username: req.user.username}, {$set: {score: points}});
    }

    return NextResponse.json({
      points,
      response: `You have secured ${points}/${questions.length} Points`,
      res: resArray,
    });
  } catch (error) {
    return NextResponse.json({error: error.message});
  }
}
