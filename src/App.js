import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import RecentlySoldSlider from "./components/RecentlySoldSlider";
import Buyers from "./components/Buyers";
import Seller from "./components/Seller";
import LatestEdition from "./components/LatestEdition";
import JoinThePremium from "./components/JoinThePremium";
import Testimonials from "./components/Testimonials";
import FreeResources from "./components/FreeResources";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      {/* <RecentlySoldSlider /> */}
      <Buyers />
      <Seller />
      <LatestEdition />
      <JoinThePremium />
      <Testimonials />
      <FreeResources />
      <Footer />
    </div>
  );
}

export default App;
