import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CaInfo from "./pages/CaInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trademark from "./components/Trademark";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/caInfo/:searchInfo" element={<CaInfo />} />
      </Routes>
      <Footer />
      <Trademark />
    </BrowserRouter>
  );
}
export default App;
