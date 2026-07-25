import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";
import Newsletter from "../../components/home/Newsletter";
import Footer from "../../components/Footer/Footer";
import Assistant from "../../components/Assistant/Assistant";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* Browse by Category */}
      <Categories />

      {/* Trending / Featured Courses */}
      <FeaturedCourses />

      {/* Why Students Choose Zynvora */}
      <WhyChooseUs />

      {/* Student Reviews */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* AI Assistant */}
      <Assistant />
    </>
  );
}

export default Home;