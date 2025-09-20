import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  // Generate a unique login token (you may want to use a more secure method in production)
  const loginToken = Math.random().toString(36).substr(2, 9)

  // In a real application, you would store this token in a database with an expiration time
  // For this example, we'll just generate a login link

  const loginLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify?token=${loginToken}&email=${encodeURIComponent(email)}`

  // Set up nodemailer transporter
  const transporter = createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Your MindWell Login Link",
      text: `Click this link to log in: ${loginLink}`,
      html: `<p>Click <a href="${loginLink}">here</a> to log in to MindWell.</p>`,
    })

    return NextResponse.json({ message: "Login link sent successfully" })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ error: "Failed to send login link" }, { status: 500 })
  }
}

