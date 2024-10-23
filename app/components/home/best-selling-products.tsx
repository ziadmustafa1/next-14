import { Heart, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image';

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
  { id: 1, name: "The north coat", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 260, originalPrice: 360, rating: 5, reviews: 65 },
  { id: 2, name: "Gucci duffle bag", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 960, originalPrice: 1160, rating: 4.5, reviews: 65 },
  { id: 3, name: "RGB liquid CPU Cooler", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 160, originalPrice: 170, rating: 4, reviews: 65 },
  { id: 4, name: "Small Bookshelf", image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png", price: 360, originalPrice: 400, rating: 5, reviews: 65 },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" width={200} height={200} />
          <Button variant="ghost" size="icon" className="absolute top-2 right-2">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute bottom-2 right-2">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="font-semibold mb-2">{product.name}</h3>
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
    </Card>
  )
}

export default function BestSellingProducts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-sm font-semibold text-red-500">This Month</h2>
          <h1 className="text-2xl font-bold">Best Selling Products</h1>
        </div>
        <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}