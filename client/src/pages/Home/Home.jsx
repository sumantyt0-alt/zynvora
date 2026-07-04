import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Footer />
    </>
  );
}

export default Home;