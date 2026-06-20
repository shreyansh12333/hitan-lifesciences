import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#0E2A47]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#C6A25B] font-semibold uppercase tracking-[0.2em] text-base">
          Get In Touch
        </span>

        <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Looking For Trusted
          <br />
          Ingredient Solutions?
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-[#F8F6F2]/90">
          Partner with Hitan Life Sciences for high-quality pharmaceutical,
          nutraceutical, wellness, and specialty ingredients backed by nearly
          two decades of industry experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="
              bg-[#0F7C82]
              hover:bg-[#106b70]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
            "
          >
            Contact Us
          </Link>

          <Link
            to="/products"
            className="
              border
              border-[#C6A25B]
              text-[#C6A25B]
              hover:bg-[#C6A25B]
              hover:text-[#0E2A47]
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
            "
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
