import Image from "next/image";
import HomePage from "./components/homePage";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
