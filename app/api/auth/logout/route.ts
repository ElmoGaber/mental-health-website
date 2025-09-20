import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  cookies().delete("user_email")
  return NextResponse.redirect("/")
}

