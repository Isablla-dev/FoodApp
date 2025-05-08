import { Home, Search, ShoppingBag, Heart, User } from "lucide-react"

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t px-6 py-2 flex justify-between items-center shadow-md z-50">
      <button className="text-gray-500 hover:text-green-600">
        <Home size={24} />
      </button>
      <button className="text-gray-500 hover:text-green-600">
        <Search size={24} />
      </button>
      <button className="bg-green-600 text-white p-2 rounded-xl shadow-lg">
        <ShoppingBag size={24} />
      </button>
      <button className="text-gray-500 hover:text-green-600">
        <Heart size={24} />
      </button>
      <button className="text-gray-500 hover:text-green-600">
        <User size={24} />
      </button>
    </nav>
  )
}

export default BottomNav