import ThemeToggle from "../components/themeToggle";
import StarBackground from "../components/starBackground";
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
      </div>
    </>
  );
};

export default Home;
