import { motion } from "motion/react";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  name: string;
  description: string;
  calories: string;
  productType: "millet" | "tomato" | "poha" | "khichdi";
  index: number;
}

export function ProductCard({ name, description, calories, productType, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group relative"
    >
      {/* Product image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-12 h-96">
        <div className="relative">
          <ProductImage productType={productType} size="lg" showSteam={true} animate={true} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-4 right-4 px-3 py-1 bg-[#FF6B00] text-white rounded-full text-sm"
          style={{ fontWeight: 600 }}
        >
          {calories}
        </motion.div>
      </div>

      <div className="p-6">
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-[#FF6B00] text-white rounded-lg hover:bg-[#CC5600] transition-colors"
          style={{ fontWeight: 600 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
