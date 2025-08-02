'use client'

import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const sendMessage = async () => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/send-message/',
        {
          phone,
          message,
        }
      )
      setResponse(res.data.status)
    } catch (err) {
      setResponse('❌ Error sending message')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">WhatsApp Chatbot UI</h2>
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        className="w-full mb-2 p-2 border rounded"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        onClick={sendMessage}
      >
        Send
      </button>
      {response && <p className="mt-4 text-center">{response}</p>}
    </div>
  )
}
