import Header from "./widgets/Header";
import HeroSection from "./widgets/HeroSection";
import ProjectsSection from "./widgets/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      <ProjectsSection />
    </div>
  );
}
