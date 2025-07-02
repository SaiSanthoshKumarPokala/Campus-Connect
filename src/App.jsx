import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import About from "./pages/About";
import Problems from "./pages/Problems";
import LostAndFound from "./pages/LostAndFound";
import Official from "./pages/Official";
import Login from "./pages/Login";
import Register from "./pages/Register"
import ProtectedRoute from "../utils/ProtectedRoute";
import AuthProvider from "./context/AuthContext";
import Username from "./pages/Username";
// import Clubs from "./pages/Clubs";

function App() {

  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/username" element={<Username />} />
          <Route path="/" element={
            <Home />} />
          <Route path="/home" element={
            <Home />} />
          <Route path="/problems" element={<ProtectedRoute>
            <Problems />
          </ProtectedRoute>} />
          <Route path="/lostandfound" element={<ProtectedRoute>
            <LostAndFound />
          </ProtectedRoute>} />
          <Route path="/aboutus" element={<ProtectedRoute>
            <About />
          </ProtectedRoute>} />
          <Route path="/official" element={<ProtectedRoute>
            <Official />
          </ProtectedRoute>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App;
