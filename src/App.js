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
import { use } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function App() {

  //state toggle language En & Ar 
  const { t, i18n } = useTranslation();
  const [Dir , setDir] = useState("ltr")
  const [language , setLang] = useState("en")
  return (
    <div dir={i18n.language == "en" ? Dir : "rtl"} lang={i18n.language == "en" ? language : "ar"}>
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
    </div>

  );
}

export default App;
