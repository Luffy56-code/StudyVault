
import Hero from "../components/LandingPage/Hero";
import FeaturesSection from "../components/LandingPage/FeaturesSection";
import Footer from "../components/Footer";
import FAQs from "../components/LandingPage/FAQs";


const LandingPage = () => {
  return (
    <div className="mt-25 ">
      <Hero/>
      <FeaturesSection/>
      <FAQs/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
