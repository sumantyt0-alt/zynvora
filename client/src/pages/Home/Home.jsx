import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Home/Hero";
import FeaturedCourses from "../../components/Home/FeaturedCourses";
import Categories from "../../components/Home/Categories";
import Footer from "../../components/Footer/Footer";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import Testimonials from "../../components/Home/Testimonials";
import Newsletter from "../../components/Home/Newsletter";


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