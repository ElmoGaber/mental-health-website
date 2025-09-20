import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { cookies } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MindWell - Your Mental Health Resource",
  description: "MindWell provides information, resources, and AI-powered chat support for mental health and wellbeing.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userEmail = cookies().get("user_email")?.value

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white dark:bg-teal-950 shadow">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-300">MindWell</div>
              <div className="space-x-4">
                <Link
                  href="/"
                  className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
                >
                  Home
                </Link>
                <Link
                  href="/resources"
                  className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
                >
                  Contact
                </Link>
                {userEmail ? (
                  <Link
                    href="/api/auth/logout"
                    className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}



import './globals.css'