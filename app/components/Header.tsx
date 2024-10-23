import { Search, Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full shadow-2xl">
      <div className="bg-black text-white text-sm py-2 px-4 text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <Button variant="link" className="text-white ml-2">ShopNow</Button>
      </div>
      <div className="container mx-auto px-4 py-4 md:flex items-center justify-between bg-white">
        <Link href="/" className="text-2xl font-bold ">
          Exclusive
        </Link>
        <nav className="flex justify-center space-x-6 py-3 md:py-0">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/signup" className="hover:text-gray-600">Sign Up</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 w-64 rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Button variant="ghost" size="icon">
            <Heart size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}