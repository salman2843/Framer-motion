import { motion } from "framer-motion";

const Banner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-[url('/banner.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
  >
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold">Discover Luxury Perfumes</h2>
      <p className="mt-2 text-lg">Fragrances that tell your story</p>
    </motion.div>
  </motion.div>
);

export default Banner;
