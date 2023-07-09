import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./pages/Footer";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
