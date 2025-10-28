import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/UMANGRESUME.pdf';
    link.download = 'Umang_Thakkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-hero opacity-5 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            UMANG THAKKAR
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Web Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about building modern web applications with React, Node.js, and cutting-edge technologies. 
            Currently working as a Project Trainee at Augmented Systems LLP.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center">
            <a 
              href="https://linkedin.com/in/umangthakkar07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-soft border border-border/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:umangthakkardz@gmail.com"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-soft border border-border/50"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
