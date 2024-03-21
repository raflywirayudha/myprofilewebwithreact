import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import Home from "./pages/Home";
import Galeri from "./pages/Galeri";
import Portofolio from "./pages/Portofolio";
import Prestasi from "./pages/Prestasi";
import Sertifikat from "./pages/Sertifikat";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Galeri" Component={Galeri} />
        <Route path="/Portofolio" Component={Portofolio} />
        <Route path="/Prestasi" Component={Prestasi} />
        <Route path="/Sertifikat" Component={Sertifikat} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
