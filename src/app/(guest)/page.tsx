import Footer from "@/components/footer";
import SearchComponent from "@/components/search-component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:container px-4">
      {" "}
      {/* Add px-4 for consistent padding */}
      {/* Center the SearchComponent */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          {" "}
          {/* Limit the width of the SearchComponent */}
          <SearchComponent />
        </div>
      </div>
      <h3 className="text-2xl sm:text-4xl font-bold text-slate-500 pt-16 pb-16 text-center uppercase tracking-wide">
        There is always a spot available.
      </h3>
      <section className="hidden lg:block pt-16 pb-32">
        <div className="grid grid-cols-3 relative">
          {/* Line connecting the circles */}
          <div className="absolute top-1/2 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>

          {/* Circle 1 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex justify-center items-center bg-black text-white rounded-full w-12 h-12 relative">
              <p className="text-2xl font-bold z-10">1</p>
              <div className="absolute -left-2 -top-2 w-16 h-16 rounded-full bg-gray-700 -z-[1]"></div>
            </div>
            <p className="pt-2 text-slate-500 text-lg tracking-wide">
              Enter your destination
            </p>
          </div>

          {/* Circle 2 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex justify-center items-center bg-black text-white rounded-full w-12 h-12 relative">
              <p className="text-2xl font-bold z-10">2</p>
              <div className="absolute -left-2 -top-2 w-16 h-16 rounded-full bg-gray-700 -z-[1]"></div>
            </div>
            <p className="pt-2 text-slate-500 text-lg tracking-wide">
              Pick date and time
            </p>
          </div>

          {/* Circle 3 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex justify-center items-center bg-black text-white rounded-full w-12 h-12 relative">
              <p className="text-2xl font-bold z-10">3</p>
              <div className="absolute -left-2 -top-2 w-16 h-16 rounded-full bg-gray-700 -z-[1]"></div>
            </div>
            <p className="pt-2 text-slate-500 text-lg tracking-wide">
              Pick a Spot
            </p>
          </div>
        </div>
      </section>
      <h2 className="text-2xl text-5xl text-center pb-32 text-slate-500">
        No more running around looking for a parking spot
      </h2>
      <section>
        <div className="pt-16 w-full absolute left-0 sm:bg-map bg-cover bg-no-repeat bg-center bg-blue-600 bg-opacity-25 bg-blend-overlay">
          <div className="grid grid-cols-1 sm:grid-cols-2 container pb-16 place-items-center sm:place-items-start">
            <div className="flex flex-col text-zinc-500 text-center">
              <p className="text-3xl sm:text-4xl font-bold">Fully responsive</p>
              <p className="text-md sm:text-lg pt-2 tracking-tight">
                It feels just like a mobile app.
              </p>
            </div>

            <div className="pt-8 sm:pt-0">
              <Image
                alt="mobile screenshot"
                width={320}
                height={400}
                src="/gateless-parking-mobile.png"
              />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
