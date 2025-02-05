import { Card, CardContent } from "@/components/ui/card"
import { CarouselItem } from "@/components/ui/carousel"
import Image from "next/image";

const CardCarousel = ({item}) => {
  return (
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3"> 
    <div className="p-1">
      <Card  className="h-[212px] sm:h-[256px] bg-CardColor">
      <CardContent className="p-3 h-full w-full flex flex-col justify-between gap-12">
          <div className="flex h-full w-full items-center justify-start text-center gap-4 
                flex-row md:flex-col md:justify-between md:items-start md:text-left md:gap-10 ">
          <Image 
                alt={item.title}
                src={item.image}
                width={80} 
                height={80} 
                priority
                className="shrink-0"
                />
            <h1 className="text-[24px] text-left md:text-left">
              {item.title}
            </h1>
          </div>

          {/* Description - visible only on mobile */}
          <p className="block md:hidden">
            {item.description}
            </p>
        {/* </div> */}
      </CardContent>
      </Card>
    </div>
  </CarouselItem>
  )
}

export default CardCarousel