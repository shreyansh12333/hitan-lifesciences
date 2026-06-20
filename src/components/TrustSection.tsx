import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const stats = [
  {
    title: "20+",
    description: "Years Experience",
  },
  {
    title: "Global",
    description: "Sourcing Network",
  },
  {
    title: "Diverse",
    description: "Ingredient Portfolio",
  },
  {
    title: "Customer",
    description: "First Approach",
  },
];

function AnimatedCounter({ from = 0, to }: { from?: number; to: number }) {
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 3,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 2,
    });

    return () => controls.stop();
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.description}
              className="
                bg-white
                rounded-2xl
                border
                border-[#C6A25B]/30
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
              <h3 className="text-3xl font-bold text-[#335F90]">
                {index === 0 ? (
                  <>
                    <AnimatedCounter to={20} />+
                  </>
                ) : (
                  item.title
                )}
              </h3>

              <p className="mt-3 text-[#2D3748] font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
