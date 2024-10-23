'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface BannerSlide {
  title: string;
  discount: string;
  image: string;
  alt: string;
}

const bannerSlides: BannerSlide[] = [
  {
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png",
    alt: "Purple iPhone 14 Pro"
  },
  {
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png",
    alt: "Purple iPhone 14 Pro"
  },
  {
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG16.png",
    alt: "Purple iPhone 14 Pro"
  },
  // Add more slides here as needed
]

export default function PromoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  return (
    <div className="relative w-full h-[400px] bg-black overflow-hidden">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-between px-12"
      >
        <div className="text-white">
          <h2 className="md:text-4xl text-2xl font-bold mb-2">{bannerSlides[currentSlide].title}</h2>
          <p className="md:text-6xl font-bold mb-6">{bannerSlides[currentSlide].discount}</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black bg-black">
            Shop Now <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Image
          src={bannerSlides[currentSlide].image}
          alt={bannerSlides[currentSlide].alt}
          className="h-[300px] w-auto object-contain"
          width={200} height={200}
        />
      </motion.div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}