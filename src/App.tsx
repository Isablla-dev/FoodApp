import { Routes, Route } from "react-router-dom"
import Welcome from "@/components/welcome"
import Home from "@/components/Home"
import FoodDetails from "@/components/FoodDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<FoodDetails />} />
    </Routes>
  )
}

export default App

