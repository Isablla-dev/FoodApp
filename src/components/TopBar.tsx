import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Parte izquierda */}
      <div className="flex items-center space-x-2">
        <span className="text-green-600 font-semibold text-lg mr-120">Hi</span>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <span className="text-gray-800 font-medium">Magura, BD</span>
      </div>

      {/* Parte derecha */}
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
    </div>
  )
}