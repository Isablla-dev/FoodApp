import { useNavigate } from "react-router-dom"

type FoodCardProps = {
    image: string
    title: string
    rating: number
    price: string
    time: string
  }
  
  export default function FoodCard({ image, title, rating, price, time }: FoodCardProps) {
    const navigate = useNavigate()
    
    return (
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center" onClick={() => navigate("/details")}>
        <img src={image} alt={title} className="h-24 w-24 object-cover rounded-full mb-4" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">{rating} ⭐ · {time}</p>
        <p className="text-green-600 font-bold mt-2">{price}</p>
      </div>
    )
  }