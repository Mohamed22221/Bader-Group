import Home from "./bages/Home";
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/bars/NavBar";
import Contact from "./components/home/contact/Contact";
import Fotter from "./components/fotter/Fotter";
import About from "./bages/About";
function App() {

  
  return (
    <>
    <NavBar />
    <Routes>
    
    <Route path="Bader-Group" element={<Home />} />
    <Route path="about" element={<About />} />

    </Routes>
    <Contact />
    <Fotter />
    </>

  );
}

export default App;
