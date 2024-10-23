import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react'
import Image from "next/image";

interface ProductShowcase {
  title: string;
  description: string;
  image: string;
  large?: boolean;
}

const products: ProductShowcase[] = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "https://c.files.bbci.co.uk/f310/live/f36de0e0-6f86-11ef-b410-fbf02dca0fc5.png",
    large: true
  },
  {
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "https://media.cntraveller.com/photos/61b8bbeb9a26829b0f14b2f1/3:2/w_3000,h_2000,c_limit/2emilia%20clarke-dec%202021%20issue0Sophia%20Spring%20:%20eyevine.jpg"
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "https://static.independent.co.uk/2024/09/19/14/Bluetooth-speaker-hero-indybest.jpg"
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "https://media.zid.store/thumbs/4b7fd6a8-e816-48b0-bf8a-25e1cdd525ad/8ae3702a-ac2d-4120-bcb4-c4e4efc42ffc-thumbnail-1000x1000.png"
  }
]

const services = [
  {
    icon: <Truck className="h-6 w-6" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
]

export default function NewArrivalSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <span className="text-red-500 font-semibold">Featured</span>
        <h2 className="text-2xl font-bold mt-1">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {products.map((product, index) => (
          <Card key={index} className={product.large ? "col-span-2 row-span-2" : ""}>
            <CardContent className="p-0 md:relative">
              <Image width={300} height={300} src={product.image} alt={product.title} className="w-full h-full object-cover" />
              <div className="md:absolute md:bottom-0 md:left-0 md:right-0 p-4 bg-black bg-opacity-50 text-white">
                <h3 className="font-bold mb-1">{product.title}</h3>
                <p className="text-sm mb-2">{product.description}</p>
                <Button variant="outline" className="text-black border-white hover:bg-black hover:text-white">
                  Shop Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              {service.icon}
            </div>
            <h3 className="font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}