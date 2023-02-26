import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import About from './components/About/About'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<About />} />
    </Routes>

  );
}

export default App;