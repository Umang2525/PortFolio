import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React.js", "HTML", "CSS", "Material UI", "Tailwind CSS", "PrimeReact"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript"],
      color: "bg-primary/15 text-primary border-primary/30"
    },
    {
      title: "Tools & Platforms",
      skills: ["Visual Studio Code", "Git", "GitHub", "Postman", "Microsoft Office"],
      color: "bg-secondary/15 text-secondary border-secondary/30"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Technical skills and tools I work with
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className={category.color}
                      >
                        {skill}
                      </Badge>
                    ))}
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
