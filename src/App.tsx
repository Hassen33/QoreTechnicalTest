import "./App.css";
import FeaturedOptionsSection from "./Components/FeaturedOptionsSection/FeaturedOptionsSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MembersStoriesSection from "./Components/MembersStoriesSection/MembersStoriesSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedOptionsSection />
      <MembersStoriesSection />
      <Footer />
    </>
  );
}

export default App;
