import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Professional work experience and contributions
          </p>
          
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in group">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Project Trainee</CardTitle>
                    <p className="text-lg text-primary font-semibold">Augmented Systems LLP</p>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  June 2024 - Present
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Working as a project trainee, gaining hands-on experience in full-stack web development 
                and contributing to real-world projects using modern technologies including React.js, 
                Node.js, and SQL databases.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Developing and maintaining full-stack web applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Collaborating with team members on complex projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implementing modern web technologies and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Contributing to code reviews and technical discussions</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
