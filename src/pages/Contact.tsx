export default function Contact() {
  return (
    <section className="py-24 bg-[#F8F6F2] min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[#335F90] font-semibold uppercase tracking-[0.2em]">
            Contact Us
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47]">
            Get In Touch
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2D3748]">
            Looking for reliable ingredient sourcing solutions? Our team is
            ready to assist you with your pharmaceutical, nutraceutical,
            wellness, and specialty ingredient requirements.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          <div
            className="
                  bg-white
                  border
                  border-[#C6A25B]/30
                  rounded-3xl
                  p-8
                  text-center
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-[#0F7C82]
                  transition-all
                  duration-300
                "
          >
            <h3 className="font-bold text-2xl text-[#0E2A47]">Email</h3>

            <p className="mt-4 text-[#2D3748]">
              Sales@hitanlife.in
              <br />
              Hitanlifesciences@yahoo.com
            </p>
          </div>

          <div
            className="
                  bg-white
                  border
                  border-[#C6A25B]/30
                  rounded-3xl
                  p-8
                  text-center
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-[#0F7C82]
                  transition-all
                  duration-300
                "
          >
            <h3 className="font-bold text-2xl text-[#0E2A47]">Phone</h3>

            <p className="mt-4 text-[#2D3748]">+91 72176 38558</p>
          </div>

          <div
            className="
                  bg-white
                  border
                  border-[#C6A25B]/30
                  rounded-3xl
                  p-8
                  text-center
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-[#0F7C82]
                  transition-all
                  duration-300
                "
          >
            <h3 className="font-bold text-2xl text-[#0E2A47]">Address</h3>

            <p className="mt-4 text-[#2D3748]">
              {" "}
              Plot No. 2, 2nd Floor
              <br />
              Junction at 80 Ft Road
              <br />
              Pitampura
              <br />
              New Delhi - 110034
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
