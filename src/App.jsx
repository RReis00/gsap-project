import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestemonialSection from "./sections/TestemonialSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });

    ScrollTrigger.refresh();

    return () => smoother.kill();
  });

  return (
    <main>
      <NavBar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div className="">
            <BenefitSection />
            <TestemonialSection />
          </div>
          <div className="h-dvh border border-red-500"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
