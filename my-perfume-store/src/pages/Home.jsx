import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import PageWrapper from "../../utils/PageWrapper";

const dummyProducts = [
  { id: "1", name: "Rose Bloom", price: 69, image: "/perfume1.jpg" },
  { id: "2", name: "Ocean Mist", price: 79, image: "/perfume2.jpg" },
  { id: "3", name: "Amber Wood", price: 89, image: "/perfume3.jpg" },
];

const Home = () => (
  <PageWrapper>
    <Navbar />
    <Banner />
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Perfumes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Home;
