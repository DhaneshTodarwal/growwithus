import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  if (body.website) {
    return NextResponse.json({ error: 'Blocked' }, { status: 400 })
  }
  const api = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4001'
  const res = await fetch(`${api}/quote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
