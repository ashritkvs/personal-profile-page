import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Equalizer from "@/components/ui/equalizer";

export default function FooterSection() {
  const contactInfo = [
    "ashritkvs@gmail.com",
    "github.com/ashritkvs",
    "linkedin.com/in/ashritkommireddy",
  ];

  return (
    <footer className="py-20 px-4 bg-black relative overflow-hidden" data-testid="footer-section">
      <div className="absolute inset-0 spotify-gradient opacity-10"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 gradient-text" data-testid="footer-title">
            The Album Continues...
          </h2>
          <p className="text-xl text-gray-400 mb-8" data-testid="footer-subtitle">
            Ready to create the next hit together?
          </p>
          
          {/* Equalizer Animation */}
          <div className="flex justify-center mb-8">
            <Equalizer large />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-6 justify-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-[hsl(141,79%,40%)] hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            data-testid="footer-button-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-[hsl(45,93%,54%)] text-[hsl(45,93%,54%)] hover:bg-[hsl(45,93%,54%)] hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
            data-testid="footer-button-email"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-[hsl(250,68%,65%)] text-[hsl(250,68%,65%)] hover:bg-[hsl(250,68%,65%)] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            data-testid="footer-button-github"
          >
            <Github className="w-4 h-4 mr-2" />
            View GitHub
          </Button>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              {contactInfo.map((info, index) => (
                <p key={index} data-testid={`footer-contact-${index}`}>
                  {info}
                </p>
              ))}
            </div>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-[hsl(141,79%,40%)] hover:text-green-400 text-2xl transition-colors"
                data-testid="footer-social-github"
              >
                <Github />
              </a>
              <a 
                href="#" 
                className="text-[hsl(45,93%,54%)] hover:text-yellow-400 text-2xl transition-colors"
                data-testid="footer-social-linkedin"
              >
                <Linkedin />
              </a>
              <a 
                href="#" 
                className="text-[hsl(250,68%,65%)] hover:text-purple-400 text-2xl transition-colors"
                data-testid="footer-social-email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
