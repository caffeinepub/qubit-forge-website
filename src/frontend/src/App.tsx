import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SuggestionsSection from "./components/SuggestionsSection";

export default function App() {
  return (
    <div className="dark">
      <div
        className="font-inter min-h-screen"
        style={{
          background: "linear-gradient(160deg, #050510 0%, #070B18 100%)",
          color: "oklch(0.97 0.01 264)",
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ContactSection />
          <SuggestionsSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
