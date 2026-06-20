import antila from "../assets/antila.avif";
import beaucience from "../assets/Beaucience.png";
import biotrex from "../assets/biotrex.avif";
import bo from "../assets/bo.png";
import dermat from "../assets/dermat.png";
import gladios from "../assets/Gladios.jpeg";
import hcp from "../assets/hcp.jpeg";
import hitech from "../assets/hitech.jpeg";
import kureasia from "../assets/kureasia.jpeg";
import multani from "../assets/multani.avif";
import vanesa from "../assets/vanesa.avif";
import walpar from "../assets/walpar.png";

const clients = [
  { name: "Dermat India", logo: dermat },
  { name: "Beaucience", logo: beaucience },
  { name: "BO International", logo: bo },
  { name: "Kureasia", logo: kureasia },
  { name: "Walpar Nutritions", logo: walpar },
  { name: "Antila Lifesciences", logo: antila },
  { name: "HCP Wellness", logo: hcp },
  { name: "Gladios Products", logo: gladios },
  { name: "Hitech Formulations", logo: hitech },
  { name: "Multani Pharma", logo: multani },
  { name: "Biotrex Nutraceuticals", logo: biotrex },
  { name: "Vanesa Cosmetics", logo: vanesa },
];

export default function About() {
  return (
    <div className="bg-[#F8F6F2]">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
            About Us
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47]">
            About Hitan Life Sciences
          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-[#2D3748] leading-relaxed">
            Hitan Life Sciences is a trusted supplier of pharmaceutical,
            nutraceutical, wellness, and specialty ingredients. Built on the
            legacy of the Doshi Pharmaceuticals Group, we combine industry
            experience, global sourcing capabilities, and scientific
            understanding to support manufacturers across multiple sectors.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
              Our Story
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#0E2A47]">
              Built On Trust & Experience
            </h2>

            <p className="mt-8 max-w-4xl mx-auto text-lg text-[#2D3748] leading-relaxed">
              With nearly two decades of experience through the Doshi
              Pharmaceuticals Group, Hitan Life Sciences continues to build
              trusted partnerships by delivering quality ingredients, reliable
              sourcing solutions, and long-term value to customers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div
              className="
                    bg-white
                    border
                    border-[#C6A25B]/30
                    rounded-3xl
                    p-10
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:border-[#335F90]
                    transition-all
                    duration-300
                  "
            >
              <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
                Vision
              </span>

              <h3 className="mt-4 text-3xl font-bold text-[#0E2A47]">
                Our Vision
              </h3>

              <p className="mt-6 text-[#2D3748] leading-relaxed">
                To become one of India's most respected ingredient companies by
                combining legacy, innovation, and scientific excellence.
              </p>
            </div>

            <div
              className="
                    bg-white
                    border
                    border-[#C6A25B]/30
                    rounded-3xl
                    p-10
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:border-[#335F90]
                    transition-all
                    duration-300
                  "
            >
              <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
                Mission
              </span>

              <h3 className="mt-4 text-3xl font-bold text-[#0E2A47]">
                Our Mission
              </h3>

              <p className="mt-6 text-[#2D3748] leading-relaxed">
                To deliver trusted ingredient solutions that empower
                manufacturers to create products that improve lives and advance
                healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#0E2A47]">
              More Than Ingredients
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2D3748]">
              We help businesses discover opportunities, identify innovative
              ingredients, and build formulations that stay relevant in a
              rapidly evolving healthcare landscape.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "20+ Years Experience",
              "Global Sourcing Network",
              "Diverse Product Portfolio",
              "Customer First Approach",
            ].map((item) => (
              <div
                key={item}
                className="
                      bg-white
                      border
                      border-[#C6A25B]/30
                      rounded-2xl
                      p-8
                      text-center
                      hover:-translate-y-1
                      hover:shadow-xl
                      hover:border-[#335F90]
                      transition-all
                      duration-300
                    "
              >
                <h3 className="font-bold text-xl text-[#0E2A47]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
              Our Clients
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#0E2A47]">
              Trusted By Industry Leaders
            </h2>

            <div className="w-24 h-1 bg-[#C6A25B] mx-auto mt-6 rounded-full"></div>

            <p className="mt-6 text-[#2D3748] max-w-3xl mx-auto">
              Trusted by leading pharmaceutical, nutraceutical, wellness,
              personal care, and healthcare companies across India.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="
        bg-white
        border
        border-[#C6A25B]/30
        rounded-2xl
        p-8
        flex
        items-center
        justify-center
        min-h-[160px]
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-[#335F90]
        transition-all
        duration-300
      "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
          h-20
          max-w-[180px]
          object-contain
        "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
