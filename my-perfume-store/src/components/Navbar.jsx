import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
  >
    <h1 className="text-xl font-bold text-gray-800">ScentAura</h1>
    <ul className="flex gap-6 text-gray-600 font-medium">
      <li>Home</li>
      <li>Shop</li>
      <li>Cart</li>
    </ul>
  </motion.nav>
);

export default Navbar;
