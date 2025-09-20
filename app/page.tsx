import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, BookOpen, Users, HeartHandshake } from "lucide-react"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800">
      <header className="bg-white dark:bg-teal-950 shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-300">MindWell</div>
            <div className="space-x-4">
              <Link href="/" className="text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100">
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
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 dark:text-teal-200 mb-4">Welcome to MindWell</h1>
          <p className="text-xl text-teal-600 dark:text-teal-300">Your journey to mental wellness starts here.</p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Depression", icon: BookOpen, description: "Understanding and coping with depression" },
            { title: "Anxiety", icon: Users, description: "Managing anxiety and stress in daily life" },
            { title: "Self-Care", icon: HeartHandshake, description: "Practices for maintaining mental health" },
            { title: "Seeking Help", icon: PhoneCall, description: "When and how to seek professional help" },
          ].map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <topic.icon className="w-6 h-6 mr-2 text-teal-600 dark:text-teal-300" />
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">Need Immediate Help?</h2>
          <p className="text-teal-600 dark:text-teal-300 mb-4">
            If you're in crisis, please don't hesitate to reach out for support.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            <PhoneCall className="w-4 h-4 mr-2" />
            Call Helpline
          </Button>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">Need Someone to Talk To?</h2>
          <p className="text-teal-600 dark:text-teal-300 mb-4">
            Our AI chat assistant is here to listen and provide support.
          </p>
          <Link href="/chat">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-teal-800 dark:bg-teal-950 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 MindWell. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:underline ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

