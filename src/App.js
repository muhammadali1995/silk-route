import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import About from './components/About/About'
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<About />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>

  );
}

export default App;