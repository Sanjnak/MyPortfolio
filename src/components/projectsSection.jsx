import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodeAlong",
    description:
      "Real-time collaborative code editor supporting multi-user sessions, and implemented live code synchronization using WebSockets.",
    image: "/projects/project1.PNG",
    tags: ["React", "Node.js", "Socket.IO"],
    demoUrl: "https://codealong-3nwz.onrender.com/",
    githubUrl: "https://github.com/Sanjnak/codealong",
  },
  {
    id: 2,
    title: "FinSight -  Financial Insights & Expense Analytics Platform",
    description:
      "Full-stack financial tracking platform to manage and analyze user expenses and income",
    image: "/projects/project3.PNG",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Smart Travel Planner & Discovery Application",
    description:
      "A responsive travel planning web application and integrated an AI-based recommendation feature to generate personalized travel itineraries based on user preferences",
    image: "/projects/project2.PNG",
    tags: ["React", "Node.js", "Firebase"],
    demoUrl: "https://trav-plan.vercel.app/",
    githubUrl: "https://github.com/Sanjnak/TravPlan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px=4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card  rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text0primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href=""
                      className="text-foreground/80 hover:text0primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Sanjnak"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
