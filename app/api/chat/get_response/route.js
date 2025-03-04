import axios from 'axios'
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  const { message } = request.json()
    const systemMessage = "I want you to act as a Magical Portions making expert... You are required to answer the questions that are related to Magical Portions making forget rest everything if anythning asked to you which is not related to Magical Portions making  you need to reply with i don't know. Only i don't know."

    const payload = {
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: message },
      ]
    }

    console.log(message)

    try {
      const response = await axios.post(process.env.AI_API_URL, payload, {
        headers: {
          Authorization: `Bearer ${process.env.AI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      })

      const aiMessage = response.data.result.response
      return NextResponse.json({response: aiMessage});

    } catch (error) {
        return NextResponse.json({message: 'Error'});

    }
}