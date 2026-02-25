import clsx from "clsx";
import {
  Mail,
  Instagram,
  Linkedin,
  Phone,
  Send,
  LocateIcon,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
const ContactsSection = () => {
  const { toast } = useToast();
  const [isSubmittimg, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message, I'll get back to you soon",
        
      });
      setIsSubmitting(false);
    }, 1500);

    
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new oppurtunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" /> {" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sanjnak.1102@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" /> {" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919013814276"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+91) 1234567890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary">
                  <LocateIcon className="h-6 w-6 text-primary-foreground" /> {" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    New Delhi, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/sanjana-kumari-40a844242/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/sanjnaaa1111"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

              <form action="" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-full border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Sanjana Kumari..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-full border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="john@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="message"
                    required
                    className="w-full px-4 py-3 rounded-full border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittimg}
                  className={clsx(
                    "cosmic-button w-full flex items-center justify-center gap-2",
                  )}
                >
                  {isSubmittimg ? "Sending...": "Send Message"} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
