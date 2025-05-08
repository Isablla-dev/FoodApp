import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Star, Flame, Clock } from "lucide-react"
import { useNavigate } from "react-router-dom"

const FoodDetails = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between rounded-b-3xl">
        <ArrowLeft className="w-6 h-6" onClick={() => navigate("/home")}/>
        <h2 className="text-lg font-semibold">Food Details</h2>
        <Heart className="w-6 h-6" />
      </div>

      {/* Image */}
      <div className="flex justify-center mt-16">
        <img
          src="/dish.jpg"
          alt="Avocado Salad"
          className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">Avocado Salad</h3>

          {/* Quantity */}
          <div className="flex items-center space-x-2 bg-green-100 rounded-full px-4 py-1">
            <button className="text-green-700 text-lg">-</button>
            <span className="font-semibold">1</span>
            <button className="text-green-700 text-lg">+</button>
          </div>
        </div>

        <p className="text-green-600 text-lg font-semibold mb-4">$15.00</p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>4.5</span>
          </div>
          <div className="flex items-center space-x-1">
            <Flame className="w-4 h-4 text-red-500" />
            <span>100 Kcal</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-green-500" />
            <span>20min</span>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-md font-semibold mb-1 text-gray-800">About food</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et cursus tortor metus
            suspendisse sed...
            <span className="text-green-600 font-semibold cursor-pointer"> Read More</span>
          </p>
        </div>
      </div>

      {/* Add to cart */}
      <div className="p-4 mt-auto">
        <Button className="w-full bg-green-600 text-white hover:bg-green-500">
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default FoodDetails