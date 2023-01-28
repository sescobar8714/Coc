import './App.css';
import MainPage from "./components/MainPage";
import Bookings from './components/Bookings';
import SocialMedia from './components/SocialMedia';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename="/Coc">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
