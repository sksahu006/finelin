import Image from "next/image";

export default function ProductService() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-6">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-4 h-auto">
          <h1 className="text-4xl font-bold">Product Shoot</h1>
          <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
            Showcase your products in their best light with our professional
            product photography and videography. We ensure every detail shines,
            creating visuals that drive engagement and sales. Let me know if
            you'd like to expand or refine any of these!
          </p>
          <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
            We provide: eCommerce Product & Food Photography
          </p>
          <button className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors ">
            Book A Slot
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/product-shooting.png"
            alt="Product Shoot"
            width={400}
            height={400}
            className="w-full rounded-2xl max-h-[400px] object-cover"
          />
        </div>
      </div>
  );
}
