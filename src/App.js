import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from './components/About/About'
import Footer from "./components/Home/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import Faq from './pages/Faq'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;