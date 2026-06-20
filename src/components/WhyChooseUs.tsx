import { motion } from "framer-motion";

const reasons = [
  {
    title: "20+ Years Experience",
    description:
      "Built on nearly two decades of pharmaceutical ingredient sourcing expertise.",
  },
  {
    title: "Global Sourcing Network",
    description:
      "Strong partnerships with trusted manufacturers across key markets.",
  },
  {
    title: "Diverse Portfolio",
    description:
      "Solutions spanning pharmaceuticals, wellness, nutrition, and personal care.",
  },
  {
    title: "Reliable Supply",
    description:
      "Consistency, documentation, and dependable quality every time.",
  },
  {
    title: "Customer First",
    description:
      "Partnerships built on transparency, responsiveness, and trust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em] text-base">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47]">
            More Than Ingredients
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2D3748]">
            We help businesses discover opportunities, identify innovative
            ingredients, and build formulations that stay relevant in a rapidly
            evolving healthcare landscape.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className={`
        bg-white
        border
        border-[#C6A25B]/30
        rounded-3xl
        p-8
        text-center
        lg:col-span-2
        ${index === 3 ? "lg:col-start-2" : ""}
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
                {reason.title}
              </h3>

              <p className="mt-4 text-[#2D3748] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
