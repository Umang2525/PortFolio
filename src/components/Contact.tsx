import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
          
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-card animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:umangthakkardz@gmail.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <span>umangthakkardz@gmail.com</span>
                      </a>
                      
                      <a 
                        href="tel:+919870048909"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <span>+91 9870048909</span>
                      </a>
                      
                      <a 
                        href="https://linkedin.com/in/umangthakkar07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <span>linkedin.com/in/umangthakkar07</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-primary p-8 rounded-xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                    <p className="mb-6 opacity-90">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white text-primary hover:bg-white/90"
                      onClick={() => window.location.href = 'mailto:umangthakkardz@gmail.com'}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
