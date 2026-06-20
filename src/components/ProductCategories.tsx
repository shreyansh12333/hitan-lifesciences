import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Pharmaceutical Ingredients",
    description:
      "Supporting formulations that require quality, consistency, and performance.",
  },
  {
    title: "Nutraceutical & Wellness",
    description:
      "Helping brands develop products for modern health-conscious consumers.",
  },
  {
    title: "Amino Acids & Performance Nutrition",
    description:
      "Ingredients designed for sports nutrition, recovery, endurance, and active lifestyles.",
  },
  {
    title: "Vitamins & Minerals",
    description:
      "Essential nutritional ingredients supporting preventive healthcare and wellness.",
  },
  {
    title: "Botanical & Herbal Extracts",
    description: "Nature-inspired ingredients for modern formulations.",
  },
  {
    title: "Beauty & Healthy Aging",
    description:
      "Supporting beauty-from-within and healthy aging formulations.",
  },
  {
    title: "Personal Care & Specialty Ingredients",
    description:
      "Advanced ingredients for innovative personal care and cosmetic formulations.",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em] text-base">
            Product Portfolio
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47]">
            Our Product Categories
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2D3748]">
            A diverse portfolio of pharmaceutical, nutraceutical, wellness, and
            specialty ingredients sourced from trusted global manufacturers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`
                bg-white
                border
                border-[#C6A25B]/30
                rounded-3xl
                p-8
                text-center
                xl:col-span-2
                ${index === 6 ? "xl:col-start-3" : ""}
              `}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(15,124,130,0)",
                  "0 0 35px rgba(15,124,130,0.25)",
                  "0 0 65px rgba(15,124,130,0.12)",
                  "0 0 0px rgba(15,124,130,0)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
              whileHover={{
                boxShadow: "0 0 90px rgba(15,124,130,0.75)",
                borderColor: "rgba(15,124,130,0.6)",
                y: -5,
              }}
            >
              <h3 className="text-2xl font-bold text-[#0E2A47]">
                {category.title}
              </h3>

              <p className="mt-4 text-[#2D3748] leading-relaxed">
                {category.description}
              </p>

              <Link
                to="/products"
                className="
                  inline-block
                  mt-6
                  font-semibold
                  text-[#335F90]
                  hover:text-[#0E2A47]
                  transition-colors
                "
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
