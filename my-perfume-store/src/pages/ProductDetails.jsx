import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageWrapper from "../../utils/PageWrapper";

const dummyProducts = [
  {
    id: "1",
    name: "Rose Bloom",
    price: 69,
    image: "/perfume1.jpg",
    desc: "A floral symphony of elegance.",
  },
  {
    id: "2",
    name: "Ocean Mist",
    price: 79,
    image: "/perfume2.jpg",
    desc: "Fresh and airy like the sea breeze.",
  },
  {
    id: "3",
    name: "Amber Wood",
    price: 89,
    image: "/perfume3.jpg",
    desc: "Deep, woody, and sensual.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === id);

  if (!product)
    return <div className="text-center mt-10">Product not found.</div>;

  return (
    <PageWrapper>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-10 mt-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-700">{product.desc}</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductDetails;
