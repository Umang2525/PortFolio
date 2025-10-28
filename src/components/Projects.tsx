import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Home Insurance Portal",
      company: "Augmented Systems LLP",
      type: "Team Project",
      description: "A comprehensive web-based insurance management system designed to streamline home insurance operations. Developed as part of a collaborative team project, implementing various insurance workflows and policy management features.",
      features: [
        "Built client input forms and comparison dashboard for viewing multiple insurance quotes",
        "Implemented real-time notifications using Socket.io and file upload with Multer",
        "Automated quote processing using Python scripts for data handling"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Python", "Socket.io", "Multer"]
    },
    {
      title: "College Web Portal",
      company: "Personal Project",
      type: "Full-Stack Application",
      description: "A comprehensive web-based solution to manage college operations effectively. Developed three user panels: Admin, Student, and Faculty.",
      features: [
        "Manage student records with CRUD operations",
        "Faculty data management and scheduling",
        "Administrative task automation and reporting"
      ],
      technologies: ["React.js", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Notable projects showcasing my technical skills and problem-solving abilities
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{project.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
