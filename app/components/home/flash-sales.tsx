'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 120, originalPrice: 160, rating: 5, reviews: 88 },
  { id: 2, name: "AK-900 Wired Keyboard", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 960, originalPrice: 1160, rating: 4, reviews: 75 },
  { id: 3, name: "IPS LCD Gaming", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 370, originalPrice: 400, rating: 5, reviews: 99 },
  { id: 4, name: "S-Series Comfort Chair", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 375, originalPrice: 400, rating: 4.5, reviews: 99 },
  { id: 5, name: "S-Series Comfort Chair", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 375, originalPrice: 400, rating: 5, reviews: 99 },
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prevTime
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex space-x-4">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
          <div className="text-xs uppercase">{key}</div>
        </div>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-64">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" width={200} height={200}/>
          <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
          <Button variant="ghost" size="icon" className="absolute top-2 right-2">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="font-semibold mb-2 h-10">{product.name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-red-500 font-bold mr-2">${product.price}</span>
          <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default function FlashSales() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length - 3) % (products.length - 3))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-sm text-red-500">Today's</h2>
          <h1 className="text-3xl font-bold">Flash Sales</h1>
        </div>
        <CountdownTimer />
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {products.slice(currentIndex, currentIndex + 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Button variant="ghost" size="icon" className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="text-center mt-8">
        <Button variant="default" className="bg-red-500 hover:bg-red-600 text-white">View All Products</Button>
      </div>
    </div>
  )
}