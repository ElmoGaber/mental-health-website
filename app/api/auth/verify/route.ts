import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const email = searchParams.get("email")

  if (!token || !email) {
    return NextResponse.redirect("/login?error=Invalid login link")
  }

  // In a real application, you would verify the token against your database
  // and check if it's still valid (not expired)

  // For this example, we'll just set a cookie to simulate a logged-in state
  cookies().set("user_email", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return NextResponse.redirect("/")
}

