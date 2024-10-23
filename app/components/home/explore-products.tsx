'use client'
import { useState } from 'react'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  colors?: string[];
  addToCart?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Breed Dry Dog Food", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 100, rating: 4, reviews: 35 },
  { id: 2, name: "CANON EOS DSLR Camera", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 360, rating: 4.5, reviews: 95, addToCart: true },
  { id: 3, name: "ASUS FHD Gaming Laptop", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 700, rating: 5, reviews: 325 },
  { id: 4, name: "Curology Product Set", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 500, rating: 4, reviews: 145 },
  { id: 5, name: "Kids Electric Car", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 960, rating: 5, reviews: 65, isNew: true, colors: ['red', 'pink'] },
  { id: 6, name: "Jr. Zoom Soccer Cleats", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 1160, rating: 4, reviews: 35, colors: ['yellow', 'red'] },
  { id: 7, name: "GP11 Shooter USB Gamepad", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 660, rating: 4.5, reviews: 55, isNew: true, colors: ['black', 'red'] },
  { id: 8, name: "Quilted Satin Jacket", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 660, rating: 4.5, reviews: 55, colors: ['green', 'white', 'black'] },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Image width={500} height={500} src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <Button variant="ghost" size="icon" className="absolute top-2 right-2">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute bottom-2 right-2">
            <Eye className="h-4 w-4" />
          </Button>
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>
          )}
        </div>
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-red-500 font-bold">${product.price}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
          </div>
        </div>
        {product.colors && (
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <div key={index} className={`w-4 h-4 rounded-full bg-${color}-500`} />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {product.addToCart ? (
          <Button className="w-full bg-black text-white hover:bg-gray-800">Add To Cart</Button>
        ) : (
          <Button variant="outline" className="w-full">View Details</Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function ExploreProducts() {
  const [currentPage, setCurrentPage] = useState(0)
  const productsPerPage = 4
  const totalPages = Math.ceil(products.length / productsPerPage)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-sm font-semibold text-red-500">Our Products</h2>
          <h1 className="text-2xl font-bold">Explore Our Products</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={handlePrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2">
          View All Products
        </Button>
      </div>
    </div>
  )
}