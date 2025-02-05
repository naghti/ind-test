import { items } from "@/lib/data";
import { useEffect, useState } from "react";
import ServicesHeader from "../serviceheader/ServicesHeader";

const Pagination = ({ api }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <ServicesHeader index={current} />

      {/* Pagination Buttons */}
      <div className="flex gap-2 px-2 py-2 mt-8 md:hidden">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-[8px] rounded-full transition-all duration-500 ease-out ${
              index === current
                ? "w-[40px] bg-gradient-to-r from-gray-900 to-gray-400"
                : "w-[8px] bg-gray-300"
            }`}
            onClick={() => api.scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Pagination;
