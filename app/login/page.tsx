import LoginForm from "@/components/LoginForm"

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-800 dark:text-teal-200 mb-6">Login to MindWell</h1>
      <div className="bg-white dark:bg-teal-950 rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  )
}

