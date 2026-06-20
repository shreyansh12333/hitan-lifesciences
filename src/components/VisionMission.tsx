import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 place-items-center">
          {/* Vision Card */}

          <motion.div
            className="
              bg-white
              border
              border-[#C6A25B]/30
              rounded-3xl
              p-10
              w-full
              max-w-xl
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
              delay: 0,
              ease: "easeInOut",
            }}
            whileHover={{
              boxShadow: "0 0 90px rgba(15,124,130,0.75)",
              borderColor: "rgba(15,124,130,0.6)",
            }}
          >
            <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em] text-base">
              Vision
            </span>

            <h3 className="mt-4 text-3xl font-bold text-[#0E2A47]">
              Our Vision
            </h3>

            <p className="mt-6 text-lg text-[#2D3748] leading-relaxed">
              To become one of India's most respected ingredient companies by
              combining legacy, innovation, and scientific excellence.
            </p>
          </motion.div>

          {/* Mission Card */}

          <motion.div
            className="
              bg-white
              border
              border-[#C6A25B]/30
              rounded-3xl
              p-10
              w-full
              max-w-xl
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
              delay: 0.4,
              ease: "easeInOut",
            }}
            whileHover={{
              boxShadow: "0 0 90px rgba(15,124,130,0.75)",
              borderColor: "rgba(15,124,130,0.6)",
            }}
          >
            <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em] text-base">
              Mission
            </span>

            <h3 className="mt-4 text-3xl font-bold text-[#0E2A47]">
              Our Mission
            </h3>

            <p className="mt-6 text-lg text-[#2D3748] leading-relaxed">
              To deliver trusted ingredient solutions that empower manufacturers
              to create products that improve lives and advance healthcare.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
