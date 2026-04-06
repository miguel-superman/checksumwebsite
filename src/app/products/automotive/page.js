
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const products = [
  {
    name: "Front & Rear Dashcam",
    price: 129,
    description: "Full HD recording",
    image: "/V6/1.jpg",
  },
  {
    name: "360 Car Camera System",
    price: 299,
    description: "Complete vehicle coverage",
    image: "/M17/7.jpg",
  },
  {
    name: "360 Car Camera System",
    price: 299,
    description: "Complete vehicle coverage",
    image: "/M550/1.jpg",
  },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-zinc-800">
      <Header />

      <h1 className="text-6xl text-white text-center mt-10">
        Automotive Security
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