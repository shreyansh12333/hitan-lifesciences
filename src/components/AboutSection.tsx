import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

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

export default function AboutSection() {
  const stats = [
    {
      title: "20+",
      description: "Years of Experience",
    },
    {
      title: "Global",
      description: "Sourcing Network",
    },
    {
      title: "7+",
      description: "Product Categories",
    },
    {
      title: "100%",
      description: "Customer Focused",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}

          <div className="text-center lg:text-left">
            <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em] text-base">
              About Us
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47] leading-tight">
              Building Trust Through Science & Innovation
            </h2>

            <p className="mt-6 text-lg text-[#2D3748] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              As a part of the Doshi Pharmaceuticals Group, Hitan Life Sciences
              carries forward nearly two decades of experience in pharmaceutical
              and healthcare ingredient sourcing.
            </p>

            <p className="mt-4 text-lg text-[#2D3748] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We combine global sourcing capabilities, scientific understanding,
              and market-driven innovation to help manufacturers develop
              products that improve lives and create lasting impact.
            </p>
          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-5">
            {stats.map((item, index) => (
              <motion.div
                key={item.description}
                className="
                  bg-white
                  p-8
                  rounded-2xl
                  border
                  border-[#C6A25B]/30
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
                <h3 className="text-4xl font-bold text-[#335F90]">
                  {index === 0 ? (
                    <>
                      <AnimatedCounter to={20} />+
                    </>
                  ) : index === 2 ? (
                    <>
                      <AnimatedCounter to={7} />+
                    </>
                  ) : (
                    item.title
                  )}
                </h3>

                <p className="mt-2 text-[#2D3748]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
