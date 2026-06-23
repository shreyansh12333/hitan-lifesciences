import { Link } from "react-router-dom";
import heroImage from "../assets/hero_image.jpeg";
export default function Hero() {
  return (
    <section className="bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center justify-center rounded-full border border-[#C6A25B]/40 bg-white px-4 py-1 text-sm font-medium text-[#335F90] mb-6">
              Trusted Since 2006
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#0E2A47] leading-tight">
              The Science of Better Pharma
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#2D3748] leading-relaxed">
              Driven by quality. Built for the future.
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#2D3748] max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Delivering high-quality pharmaceutical, nutraceutical, wellness,
              and specialty ingredients to manufacturers across India.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start lg:items-start">
              <Link
                to="/products"
                className="
                  bg-[#0E2A47]
                  hover:bg-[#16385B]
                  text-white
                  px-8
                  py-4
                  rounded-lg
                  font-medium
                  transition
                  text-center
                  w-full
                  sm:w-auto
                "
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="
                  border
                  border-[#C6A25B]
                  hover:bg-[#C6A25B]
                  hover:text-[#0E2A47]
                  px-8
                  py-4
                  rounded-lg
                  font-medium
                  text-[#0E2A47]
                  transition
                  text-center
                  w-full
                  sm:w-auto
                "
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side */}

          <div className="flex justify-center">
            <div
              className="
    w-full
    max-w-lg
    h-[250px]
    sm:h-[350px]
    lg:h-[500px]
    rounded-3xl
    border
    border-[#C6A25B]/30
    overflow-hidden
    shadow-xl
  "
            >
              <img
                src={heroImage}
                alt="Hitan Life Sciences"
                className="
      w-full
      h-full
      object-cover
    "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
