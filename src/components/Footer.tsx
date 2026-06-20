import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0E2A47] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 place-items-center">
          {/* Brand */}

          <motion.div
            className="
              flex flex-col
              items-center
              md:items-start
              text-center
              md:text-left
              p-6
              rounded-3xl
              w-full
              max-w-sm
            "
            animate={{
              boxShadow: [
                "0 0 0px rgba(15,124,130,0)",
                "0 0 25px rgba(15,124,130,0.15)",
                "0 0 45px rgba(15,124,130,0.08)",
                "0 0 0px rgba(15,124,130,0)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-[#F8F6F2]">
              HITAN LIFESCIENCES
            </h3>

            <p className="mt-3 text-[#F8F6F2]/70 text-sm leading-relaxed max-w-xs">
              Trusted Since 2006. Driven by Quality. Built for the Future.
            </p>
          </motion.div>

          {/* Links */}

          <motion.div
            className="
              flex flex-col
              items-center
              md:items-start
              text-center
              md:text-left
              p-6
              rounded-3xl
              w-full
              max-w-sm
            "
            animate={{
              boxShadow: [
                "0 0 0px rgba(198,162,91,0)",
                "0 0 25px rgba(198,162,91,0.15)",
                "0 0 45px rgba(198,162,91,0.08)",
                "0 0 0px rgba(198,162,91,0)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut",
            }}
          >
            <h4 className="font-semibold text-lg mb-3 text-[#C6A25B]">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#F8F6F2]/70 hover:text-[#0F7C82] transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-[#F8F6F2]/70 hover:text-[#0F7C82] transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-[#F8F6F2]/70 hover:text-[#0F7C82] transition-colors"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#F8F6F2]/70 hover:text-[#0F7C82] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            className="
              flex flex-col
              items-center
              md:items-start
              text-center
              md:text-left
              p-6
              rounded-3xl
              w-full
              max-w-sm
            "
            animate={{
              boxShadow: [
                "0 0 0px rgba(15,124,130,0)",
                "0 0 25px rgba(15,124,130,0.15)",
                "0 0 45px rgba(15,124,130,0.08)",
                "0 0 0px rgba(15,124,130,0)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0.6,
              ease: "easeInOut",
            }}
          >
            <h4 className="font-semibold text-lg mb-3 text-[#C6A25B]">
              Contact
            </h4>

            <ul className="space-y-2 text-[#F8F6F2]/70 text-sm">
              <li>
                Sales@hitanlife.in
                <br />
                Hitanlifesciences@yahoo.com
              </li>
              <li>+91 72176 38558</li>
              <li>
                {" "}
                Plot No. 2, 2nd Floor
                <br />
                Junction at 80 Ft Road
                <br />
                Pitampura
                <br />
                New Delhi - 110034
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-[#C6A25B]/20 pt-6">
          <p className="text-center text-[#F8F6F2]/50 text-sm">
            © 2026 Hitan Life Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
