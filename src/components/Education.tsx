import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "B.Sc. IT (Computer Application & Information Technology)",
      institution: "Hemchandracharya North Gujarat University, Patan",
      period: "Expected: April 2025",
      achievement: "Completed Bachelor Degree with 7.6 SGPA",
      icon: GraduationCap
    },
    {
      degree: "Higher Secondary (12th Commerce)",
      institution: "Sardar Patel High School, Deesa",
      period: "March 2022",
      achievement: "96.04 PR / 83.57%",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Academic background and achievements
          </p>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <edu.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Award className="h-5 w-5" />
                    {edu.achievement}
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
