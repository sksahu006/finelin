import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
  CarouselIndicator,
} from "./ui/carousel";

export function CarouselCustomSizes() {
  return (
    <div className="relative w-full">
      <Carousel>
        <CarouselContent>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <CarouselItem key={index} className="p-4 h-auto">
              <div className="flex flex-col px-4 items-center py-4 justify-start gap-4  dark:bg-zinc-900 rounded-lg">
                <h1 className="text-yellow-400 dark:text-white font-bold text-sm sm:text-2xl whitespace-break-spaces sm:whitespace-nowrap hover:text-yellow-600 dark:hover:text-gray-300 transition-colors">
                  Our Amazing Customers Drive Our Success!
                </h1>
                <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-sm hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-center leading-6">
                  Our customers are our greatest asset. We are committed to
                  providing exceptional service and support to our valued
                  customers. Thank you for choosing our company for your
                  business needs.
                </p>

                <div className="flex flex-col items-center flex-1 justify-center">
                  <Image
                    src="/boy.png"
                    alt="Customers"
                    width={500}
                    height={500}
                    className="w-24 h-24 rounded-full border-2 border-yellow-300 dark:border-gray-700"
                  />
                  <p className="text-yellow-400 dark:text-gray-400 text-lg hover:text-yellow-600 dark:hover:text-gray-300 transition-colors text-center leading-6">
                    Aditya Kumar Dash
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
