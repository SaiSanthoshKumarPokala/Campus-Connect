import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import About from "./pages/About";
import Problems from "./pages/Problems";
import LostAndFound from "./pages/LostAndFound";
import Official from "./pages/Official";
// import Clubs from "./pages/Clubs";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/lostandfound" element={<LostAndFound />} />
        <Route path="/aboutus" element={<About />} />
        {/* <Route path="/clubs" element={<Clubs />} /> */}
        <Route path="/official" element={<Official />} />
      </Routes>      
      <Footer />
    </>
  )
}

export default App;
