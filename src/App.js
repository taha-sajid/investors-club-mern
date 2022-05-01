import "./App.css";
import Header from "./components/Header";
// import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Buy from "./Pages/Buy";
import Home from "./Pages/Home";
import Premium from "./Pages/Premium";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Sell from "./Pages/Sell";
function App() {
  return (
    <div className="App">
      {/* <TopNav /> */}
      {/* <Navbar />  Header component contain this navbar */}
      {/* <Header /> */}
      {/* wrapped home buy and sell pages into react router dom */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/buy" element={<Navigate replace to="/buy" />} /> */}
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
      {/* <Buy /> */}
      {/* <Sell /> */}
      <Footer />
    </div>
  );
}

export default App;
