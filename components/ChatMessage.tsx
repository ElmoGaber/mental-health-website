import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex ${role === "user" ? "flex-row-reverse" : "flex-row"} items-start max-w-3/4`}>
        <Avatar className="w-8 h-8">
          <AvatarImage src={role === "user" ? "/user-avatar.png" : "/assistant-avatar.png"} />
          <AvatarFallback>{role === "user" ? "U" : "A"}</AvatarFallback>
        </Avatar>
        <div
          className={`mx-2 p-3 rounded-lg ${role === "user" ? "bg-teal-500 text-white" : "bg-gray-200 dark:bg-teal-800 text-gray-800 dark:text-white"}`}
        >
          {content}
        </div>
      </div>
    </div>
  )
}

