import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import { ContainerArticleFoot } from "./components/ContainerArticleFoot";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";


function App() {
  
  return (
    <BrowserRouter>
      <main className="px-5 ">
        <Header />
        <Routes>

          
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />


        </Routes>
        <Footer />

      </main>

    </BrowserRouter>


  );
}

export default App;
