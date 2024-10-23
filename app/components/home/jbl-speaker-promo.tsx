import { Button } from "@/components/ui/button"
import Image from "next/image";

interface FeatureBadge {
  value: string;
  label: string;
}

const featureBadges: FeatureBadge[] = [
  { value: "23", label: "hours" },
  { value: "0%", label: "EMI" },
  { value: "99", label: "Delivery" },
  { value: "365", label: "days" },
]

export default function JBLSpeakerPromo() {
  return (
    <div className="bg-black text-white p-8 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-green-400 text-sm font-semibold">Categories</span>
          <h2 className="text-4xl font-bold leading-tight">
            Enhance Your<br />Music Experience
          </h2>
          <div className="flex space-x-4">
            {featureBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-white text-black rounded-full w-16 h-16">
                <span className="text-lg font-bold">{badge.value}</span>
                <span className="text-xs">{badge.label}</span>
              </div>
            ))}
          </div>
          <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-2">
            Buy Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="https://w7.pngwing.com/pngs/474/444/png-transparent-jbl-charge-3-loudspeaker-jbl-flip-3-jbl-flip-4-audio-jbl-electronics-bluetooth-loudspeaker.png"
            alt="JBL Speaker"
            className="w-full h-auto object-contain" width={200} height={200}
          />
        </div>
      </div>
    </div>
  )
}