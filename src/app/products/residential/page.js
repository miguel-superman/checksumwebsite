
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const products = [
  {
    name: "Home Camera Kit",
    price: 199,
    description: "Fron door bell camera",
    image: "/doorbell.jpg",
  },
  {
    name: "Smart Door Camera",
    price: 149,
    description: "Monitor your front door remotely",
    image: "/home2.jpg",
  },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <h1 className="text-6xl text-white text-center mt-10">
        Residential Security
      </h1>

      <div className="grid md:grid-cols-3 gap-6 p-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

      <Footer />
    </div>
  );
}