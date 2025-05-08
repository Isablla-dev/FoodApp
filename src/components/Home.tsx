import { useState } from "react"
import FoodCard from "./FoodCard"
import { Input } from "@/components/ui/input"
import { TopBar } from "@/components/TopBar"
import BottomNav from "./BottomNav"


const categories = ["Food", "Fruits", "Vegetables", "Grocery"]

const foodItems = [
  {
    id: 1,
    title: "Hamburguesa",
    image: "/burguer.jpg",
    rating: 4.5,
    price: "$5.99",
    time: "20 min",
    category: "Food"
  },
  {
    id: 2,
    title: "Manzana",
    image: "/apple.jpg",
    rating: 4.7,
    price: "$1.50",
    time: "5 min",
    category: "Fruits"
  },
  {
    id: 2,
    title: "Manzana",
    image: "/apple.jpg",
    rating: 4.7,
    price: "$1.50",
    time: "5 min",
    category: "Food"
  },

  {
    id: 3,
    title: "Ensalada",
    image: "/dish.jpg",
    rating: 4.5,
    price: "$15.00",
    time: "20 min",
    category: "Vegetables"
  }
]

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState("Food")

  const filteredItems = foodItems.filter(
    item => item.category === selectedCategory
  )

  return (
    
    <div className="p-4 pb-20 bg-white h-screen">

        <TopBar/>
      <h1 className="text-2xl font-bold mb-4 text-black">Find your favourite food 🍔</h1>

      <Input 
        type="text"
        placeholder="Search for food..." 
        className="mb-6 bg-gray-100 text-gray-800 "
      />

      <div className="flex gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black">
        {filteredItems.map(item => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
      <BottomNav />
    </div>
    
  )
}