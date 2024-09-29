
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from '@/assets/images/image-product-1.jpg'
import image2 from '@/assets/images/image-product-2.jpg'
import image3 from '@/assets/images/image-product-3.jpg'
import image4 from '@/assets/images/image-product-4.jpg'

const carouselItems = [
    {id:1,image:image1},
    {id:1,image:image2},
    {id:1,image:image3},
    {id:1,image:image4},
  ]

const Caurosel = () => {
  return (
    <Carousel className="w-screen h-72 sm:hidden relative">
    <CarouselContent>
      {carouselItems.map(item => (
         <CarouselItem key={item.id}>
          <div className="">
          <div>
          <div className="flex aspect-square items-center justify-center">
             <img className="rounded object-cover" src={item.image}  alt="img"/>
            </div>
          </div>
          </div>
         </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="absolute top-1/2 left-8"  />
    <CarouselNext className="absolute top-1/2 right-8" />
    </Carousel>
  )
}

export default Caurosel