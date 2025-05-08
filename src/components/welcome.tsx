import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
    const navigate = useNavigate()

    return (

    <div className="h-screen w-full flex flex-col items-center justify-center bg-green-500 px-4">
        <div className="bg-white rounded-full p-6 shadow-md mb-6">
            <img
                src="/dish.jpg"  
                alt="Dish"
                className="h-40 w-40 object-cover rounded-full"
            />
        </div>
        <h1 className="text-2xl font-semibold text-white mb-4 text-center">
        Find your favourite food
        </h1>
        <Button className="bg-white text-green-600 hover:bg-green-100 px-6 py-3 text-lg font-semibold" onClick={() => navigate("/home")}>
        Let’s Explore
        </Button>
    </div>
            
    )
}

export default Welcome
