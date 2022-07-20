import Home from "./bages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/bars/NavBar";
import Contact from "./components/home/contact/Contact";
import Fotter from "./components/fotter/Fotter";
import About from "./bages/About";
import Projects from "./bages/Projects";
import ScrollToTop from "./ScrollToTop";
import ScrollTop from "./components/glopal/ScrollTop";
import Sectors from "./bages/Sectors";
function App() {


  return (
    <>
      <ScrollToTop />
      <ScrollTop />
      <NavBar />
      <Routes>
        <Route path="Bader-Group" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="sector" element={<Sectors />} />
      </Routes>
      <Contact />
      <Fotter />
    </>

  );
}

export default App;
