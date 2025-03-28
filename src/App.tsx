import "./App.css";
import Contact from "./Components/Contact/Contact";
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
