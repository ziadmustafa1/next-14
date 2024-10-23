/* eslint-disable @next/next/no-img-element */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
            <h3 className="mb-2">Subscribe</h3>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-white text-white placeholder-gray-400 rounded-r-none"
              />
              <Button variant="outline" className="bg-transparent border-white text-white rounded-l-none">
                →
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Login / Register</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="mb-2 text-sm text-gray-400">Save $3 with App New User Only</p>
            <div className="flex space-x-4 mb-4">
              <Image src="" alt="QR Code" className="" width={500} height={500} />
              <div className="flex flex-col justify-between">
                <Image src="" alt="Google Play" className="h-10" width={500} height={500}/>
                <Image src="" alt="App Store" className="h-10" width={500} height={500}/>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-400"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  )
}