import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground ">
              I have hands-on experience building projects using modern
              technologies and implementing data structures & algorithms to
              write optimized solutions. Through continuous practice and
              real-world projects, I’ve developed strong debugging skills and a
              structured problem-solving mindset.
            </p>
            <p className="text-muted-foreground ">
              I’m deeply passionate about building modern web applications and
              solving challenging problems using efficient algorithms. I enjoy
              turning ideas into functional, user-friendly products while
              continuously improving my technical skills. For me, coding is not
              just about writing syntax — it’s about designing smart, scalable
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1DluMt5NmwMuX0WDeSZpTMC30UPMi7JY5/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                View CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4"> 
                    <div className="p=3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">Crafting modern, responsive web applications with a focus on performance, scalability, and clean design.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4"> 
                    <div className="p=3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Problem Solving & DSA</h4>
                        <p className="text-muted-foreground">Strong foundation in Data Structures and Algorithms with a passion for writing efficient and optimized solutions. Regularly practice problem-solving to sharpen analytical thinking.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4"> 
                    <div className="p=3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Continuous Learning</h4>
                        <p className="text-muted-foreground">Always exploring new technologies and improving my skills. I enjoy staying updated with modern development trends and building projects that push my limits.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
