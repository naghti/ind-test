'use client'

import { useState } from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { items } from "@/lib/data";
import Paginain from "@/layout/pagination/Paginain";
import CardCarousel from "../cardcarousel/cardCarousel";

const HandleCarusel = () => {
    const [api, setApi] = useState(0)
  return (
    <div className="">
      <Paginain api={api} />
      <Carousel className="w-full px-1 mt-2 sm:mt-5 "  setApi={setApi}>
        <CarouselContent className="-ml-1">
          {items.map((item, index) => (
            <CardCarousel key={index} item={item}  />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default HandleCarusel


