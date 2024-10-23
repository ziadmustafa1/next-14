'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Category {
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { name: "Phones", icon: <Smartphone className="h-8 w-8" /> },
  { name: "Computers", icon: <Monitor className="h-8 w-8" /> },
  { name: "SmartWatch", icon: <Watch className="h-8 w-8" /> },
  { name: "Camera", icon: <Camera className="h-8 w-8" /> },
  { name: "HeadPhones", icon: <Headphones className="h-8 w-8" /> },
  { name: "Gaming", icon: <Gamepad className="h-8 w-8" /> },
]

export default function BrowseByCategory() {
  const [activeCategory, setActiveCategory] = useState("Camera")

  const handlePrev = () => {
    const currentIndex = categories.findIndex(cat => cat.name === activeCategory)
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length
    setActiveCategory(categories[prevIndex].name)
  }

  const handleNext = () => {
    const currentIndex = categories.findIndex(cat => cat.name === activeCategory)
    const nextIndex = (currentIndex + 1) % categories.length
    setActiveCategory(categories[nextIndex].name)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-sm font-semibold text-red-500">Categories</h2>
          <h1 className="text-2xl font-bold">Browse By Category</h1>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="outline"
            className={`flex flex-col items-center justify-center h-32 ${
              category.name === activeCategory ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.icon}
            <span className="mt-2 text-sm">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}