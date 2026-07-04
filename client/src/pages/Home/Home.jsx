import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Categories from "../../components/home/Categories";
import Footer from "../../components/layout/Footer";
import WhyChooseUs from "../../components/home/WhyChooseUs";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Footer />
      <WhyChooseUs />
    </>
  );
}

export default Home;