import Image from "next/image";
import HomeNavbar from "./components/User/HomePage/HomeNavbar";
import Banner from "./components/User/HomePage/Banner";
import CardVideoSection from "./components/User/HomePage/CardVideoSection";
import Footer from "./components/User/HomePage/Footer";


export default function Home() {
  return (
    <main>
      <HomeNavbar/>
      <Banner/>
      <CardVideoSection/>
      <Footer/>
    </main>
  );
}
