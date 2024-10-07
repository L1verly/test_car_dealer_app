import Image from "next/image"
import Link from "next/link"
import carPlaceholder from "@/public/car_placeholder.webp"

const CarCard = ({makeName, modelName}) => {
  return (
    <Link href=''>
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image
                fill
                src={carPlaceholder}
                alt='Mountain house'
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="hover:scale-110 object-cover transition h-full w-full"
            />
        </div>

        <div className="mt-2">
            <p className="text-lg font-bold">{makeName}</p>
        </div>
        
        <div className="mt-2">
            <p className="text-sm font-semibold">{modelName}</p>
        </div>
    </Link>
  )
}

export default CarCard