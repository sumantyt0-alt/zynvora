import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Categories from "../../components/home/Categories";
import Footer from "../../components/layout/Footer";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Footer />
      <WhyChooseUs />
      <Testimonials />

    </>
  );
}

export default Home;