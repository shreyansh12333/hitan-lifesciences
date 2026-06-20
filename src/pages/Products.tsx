import ProductCategory from "../components/products/ProductCategory";
import ProductsHero from "../components/products/ProductsHero";

export default function Products() {
  return (
    <>
      <ProductsHero />

      <ProductCategory
        title="Pharmaceutical Ingredients"
        description="Supporting formulations that require quality, consistency, and performance."
        products={[
          "Iron & Mineral Ingredients",
          "Calcium-Based Ingredients",
          "Zinc Compounds",
          "Menthol Derivatives",
          "Pharmaceutical Excipients",
          "Functional Additives",
          "Specialty Pharmaceutical Raw Materials",
        ]}
      />

      <ProductCategory
        title="Nutraceutical & Wellness Ingredients"
        description="Helping brands develop products for modern health-conscious consumers."
        products={[
          "Coenzyme Q10 (CoQ10)",
          "Collagen Peptides",
          "Omega-3 Ingredients",
          "Reduced Glutathione",
          "Lycopene",
          "Astaxanthin",
          "Colostrum",
          "Functional Fibers",
          "Specialty Wellness Ingredients",
        ]}
      />

      <ProductCategory
        title="Amino Acids & Performance Nutrition"
        description="Ingredients designed for sports nutrition, recovery, endurance, and active lifestyles."
        products={[
          "L-Carnitine",
          "L-Arginine",
          "L-Glutamine",
          "L-Tyrosine",
          "L-Isoleucine",
          "L-Lysine",
          "L-Ornithine",
          "L-Serine",
        ]}
      />

      <ProductCategory
        title="Vitamins & Minerals"
        description="Essential nutritional ingredients supporting preventive healthcare and wellness formulations."
        products={[
          "Vitamin Ingredients",
          "Mineral Ingredients",
          "Trace Elements",
          "Nutritional Blends",
        ]}
      />

      <ProductCategory
        title="Botanical & Herbal Extracts"
        description="Nature-inspired ingredients for modern formulations."
        products={[
          "Curcumin Extract",
          "Ginger Extract",
          "Ginkgo Biloba Extract",
          "Ginseng Extract",
          "Grape Seed Extract",
        ]}
      />

      <ProductCategory
        title="Beauty & Healthy Aging Ingredients"
        description="Supporting the growing beauty-from-within and healthy aging markets."
        products={[
          "Collagen Peptides",
          "Reduced Glutathione",
          "Lycopene",
          "Astaxanthin",
          "Biotin",
          "Evening Primrose Oil",
          "Antioxidant Complexes",
        ]}
      />

      <ProductCategory
        title="Personal Care & Specialty Ingredients"
        description="Advanced ingredients for innovative personal care and cosmetic formulations."
        products={[
          "Specialty Cosmetic Ingredients",
          "Functional Personal Care Ingredients",
          "Performance Actives",
          "Formulation Support Ingredients",
        ]}
      />
    </>
  );
}
