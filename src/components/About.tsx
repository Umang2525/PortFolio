import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Experienced in building modern web applications with React.js, Node.js, and databases"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks, always staying updated"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication and project management skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A dedicated B.Sc. IT student with hands-on experience in full-stack development
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate full-stack web developer currently pursuing B.Sc. IT at Hemchandracharya North Gujarat University. 
                With a strong foundation in both frontend and backend technologies, I specialize in creating responsive, 
                user-friendly web applications using React.js, Node.js, and modern databases.
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                Currently working as a Project Trainee at Augmented Systems LLP, where I contribute to real-world projects 
                and continuously enhance my skills in full-stack development. I'm driven by the challenge of solving complex 
                problems and building scalable solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
