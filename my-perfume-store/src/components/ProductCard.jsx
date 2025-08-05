import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded shadow-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
    </motion.div>
  </Link>
);

export default ProductCard;
