import ThemeToggle from "../components/themeToggle";
import StarBackground from "../components/starBackground";
import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import SkillsSection from "../components/skillsSection";
import ProjectsSection from "../components/projectsSection";
import ContactsSection from "../components/contactsSection";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <NavBar />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
