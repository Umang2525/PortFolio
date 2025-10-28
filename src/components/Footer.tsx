import { Linkedin, Mail, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/umangthakkar07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:umangthakkardz@gmail.com"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Umang Thakkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
