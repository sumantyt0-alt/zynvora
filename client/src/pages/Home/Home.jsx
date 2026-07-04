import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Categories from "../../components/home/Categories";
import Footer from "../../components/layout/Footer";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";
import Newsletter from "../../components/home/Newsletter";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;