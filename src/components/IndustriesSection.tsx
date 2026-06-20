import { motion } from "framer-motion";

const industries = [
  "Pharmaceutical Manufacturers",
  "Nutraceutical Companies",
  "Sports Nutrition Brands",
  "Wellness & Preventive Healthcare Brands",
  "Personal Care Manufacturers",
  "Cosmetic Companies",
  "Contract Manufacturers",
  "Research & Development Organizations",
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em] text-base">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47]">
            Trusted Across Multiple Industries
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2D3748]">
            Supporting manufacturers, innovators, and healthcare brands with
            reliable ingredient sourcing solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              className="
                bg-white
                border
                border-[#C6A25B]/30
                rounded-2xl
                p-8
                text-center
              "
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
              }}
            >
              <h3 className="font-semibold text-[#0E2A47]">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
