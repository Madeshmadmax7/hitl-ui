import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
// import ProgramsPage from "./pages/ProgramsPage";
// import ResearchPage from "./pages/ResearchPage";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/research" element={<ResearchPage />} /> */}
      </Routes>

      <Footer />
    </>
  );
}
