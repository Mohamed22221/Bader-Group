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
import { useState ,useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Gleap from "gleap";

function App() {
  Gleap.initialize("3W2XAMmPOWwHetgDhQATvzCzJn6tGtsl");
  //state toggle language En & Ar 
  const { t, i18n } = useTranslation();
  const [Dir , setDir] = useState("ltr")
  const [language , setLang] = useState("en")
  //get general api 
  const [counter, setCounter] = useState([]);
  const [social, setsocial] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios.get(`https://bcg.000itkw.com/api/sliders`).then(response =>{
      setCategories(response)
      
    })
  },[])
  console.log("categories" ,categories)
    
  useEffect(() => {
    axios.get(`https://bcg.000itkw.com/api/settings`).then(response =>{
      setCounter(response.data.data.counters)
      setsocial(response.data.data)
    })
  }, [])
console.log(social)

  return (
    
    <div dir={i18n.language == "en" ? Dir : "rtl"} lang={i18n.language == "en" ? "en" : "ar"} className={i18n.language == "en" ? "body en" : "body ar"}>
      <ScrollToTop />
      <ScrollTop />
      <NavBar />
      <Routes>
        <Route path="Bader-Group" element={<Home counter={counter} />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="sector" element={<Sectors counter={counter} />} />
      </Routes>
      <Contact />
      <Fotter />
    </div>
    

  );
}

export default App;
