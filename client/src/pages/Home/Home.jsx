import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to Learn AI 🚀
        </h1>
      </main>

      <Footer />
    </>
  );
}

export default Home;