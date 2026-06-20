export default function ContactSection() {
      return (
        <section id="contact" className="py-24 bg-[#F8F6F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <span className="text-[#0F7C82] font-semibold uppercase tracking-[0.2em] text-base">
                Contact Us
              </span>
    
              <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#0E2A47]">
                Let's Start A Conversation
              </h2>
    
              <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2D3748]">
                Looking for reliable ingredient sourcing solutions? Reach out to our
                team and we'll be happy to assist you.
              </p>
            </div>
    
            <div className="mt-20 grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
    
              <div className="bg-white border border-[#C6A25B]/30 rounded-3xl p-8 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#0E2A47]">
                  Get In Touch
                </h3>
    
                <div className="mt-8 space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-[#0F7C82] font-semibold">
                      Email
                    </p>
    
                    <p className="mt-2 text-[#2D3748]">
                      info@hitanlifesciences.com
                    </p>
                  </div>
    
                  <div>
                    <p className="text-sm uppercase tracking-wider text-[#0F7C82] font-semibold">
                      Phone
                    </p>
    
                    <p className="mt-2 text-[#2D3748]">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
    
                  <div>
                    <p className="text-sm uppercase tracking-wider text-[#0F7C82] font-semibold">
                      Address
                    </p>
    
                    <p className="mt-2 text-[#2D3748]">
                      Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
    
              {/* Form */}
    
              <div className="bg-white border border-[#C6A25B]/30 rounded-3xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#2D3748]">
                      Name
                    </label>
    
                    <input
                      type="text"
                      className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-[#0F7C82]"
                    />
                  </div>
    
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#2D3748]">
                      Email
                    </label>
    
                    <input
                      type="email"
                      className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-[#0F7C82]"
                    />
                  </div>
    
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#2D3748]">
                      Company
                    </label>
    
                    <input
                      type="text"
                      className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-[#0F7C82]"
                    />
                  </div>
    
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#2D3748]">
                      Message
                    </label>
    
                    <textarea
                      rows={5}
                      className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-[#0F7C82] resize-none"
                    />
                  </div>
    
                  <button
                    type="submit"
                    className="
                      w-full
                      bg-[#0E2A47]
                      hover:bg-[#16385B]
                      text-white
                      py-4
                      rounded-xl
                      font-semibold
                      transition
                    "
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }