import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/home/Hero";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Categories from "../../components/home/Categories";
import Footer from "../../components/Footer/Footer";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";
import Newsletter from "../../components/home/Newsletter";
import Assistant from "../../components/Assistant/Assistant";


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
      <Assistant />
    </>
  );
}

export default Home;