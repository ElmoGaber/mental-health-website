import Chat from "@/components/Chat"

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-800 dark:text-teal-200 mb-6">MindWell Chat Support</h1>
      <div className="bg-white dark:bg-teal-950 rounded-lg shadow-lg p-6">
        <p className="text-teal-600 dark:text-teal-300 mb-4">
          Welcome to MindWell Chat Support. Please note that this is an AI-powered chat and should not be considered a
          substitute for professional mental health advice. If you're experiencing a crisis, please contact emergency
          services or a mental health professional immediately.
        </p>
        <Chat />
      </div>
    </div>
  )
}

