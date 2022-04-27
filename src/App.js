import "./App.css";
import Header from "./components/Header";
// import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Buy from "./Pages/Buy";
import Home from "./Pages/Home";

import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      {/* <TopNav /> */}
      {/* <Navbar />  Header component contain this navbar */}
      <Header />
      {/* wrapped home buy and sell pages into react router dom */}
      <Home />
      <Buy />
      {/* <Sell /> */}
      <Footer />
    </div>
  );
}

export default App;
