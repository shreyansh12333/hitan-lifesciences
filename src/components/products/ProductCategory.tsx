type ProductCategoryProps = {
  title: string;
  description: string;
  products: string[];
};

export default function ProductCategory({
  title,
  description,
  products,
}: ProductCategoryProps) {
  return (
    <section className="py-16 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E2A47]">
            {title}
          </h2>

          <p className="mt-4 text-[#2D3748] max-w-3xl mx-auto">{description}</p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <div
                key={product}
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-white
                  border
                  border-[#C6A25B]/40
                  text-[#335F90]
                  font-medium
                  hover:bg-[#335F90]
                  hover:text-white
                  hover:border-[#335F90]
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {product}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
