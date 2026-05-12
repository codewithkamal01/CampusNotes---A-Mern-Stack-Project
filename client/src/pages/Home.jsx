import Cards from "../components/sections/Cards";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import PopularSubjects from "../components/sections/PopularSubjects";
import RecentUpload from "../components/sections/RecentUpload";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Cards />
      <RecentUpload />
      <PopularSubjects />
      <CTASection />
      <Footer />
    </main>
  );
}
