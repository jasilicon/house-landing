import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="w-full px-4 py-16 md:py-24 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Your Home, Spotless. Every Time.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          Professional home cleaning that fits around your life — vetted
          cleaners, flexible scheduling, and a 100% satisfaction guarantee.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition">
          Get a Free Quote
        </button>
      </div>
      <div className="w-full lg:w-1/2 aspect-video relative overflow-hidden rounded-lg">
        <Image
          src="/hero.webp"
          alt="Bright, freshly cleaned living room"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}