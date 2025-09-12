import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Instagram } from "lucide-react";
import { FaBehance } from "react-icons/fa";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.name.trim()) {
      toast({ title: "Name required", description: "Please enter your name.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      toast({ title: "Message too short", description: "Message should be at least 10 characters.", variant: "destructive" });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formsubmit.co/ajax/rishitakumari206@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "New message from portfolio",
          _captcha: "false",
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      toast({
        title: "Message sent!",
        description: "Thank you. I will get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border glow-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Hidden honeypot field for bots */}
                  <input type="text" name="_honey" style={{ display: "none" }} />

                  {/* Hidden redirect after submit (optional) */}
                  <input type="hidden" name="_next" value="https://your-portfolio.com/thank-you" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-input border-border focus:border-primary transition-colors"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-input border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-input border-border focus:border-primary transition-colors"
                  />

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-input border-border focus:border-primary transition-colors resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info + Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new projects and opportunities. 
                Whether you need iOS app development, AI/ML solutions, or web development, 
                let's talk about how we can bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: "📧", title: "Email", content: "rishitakumari206@gmail.com", description: "Send me an email anytime!" },
                { icon: "📱", title: "Phone", content: "+91 7461886500", description: "Call me for urgent projects" },
                { icon: "📍", title: "Location", content: "Noida, India", description: "Available for remote work" },
                { icon: "⏰", title: "Response Time", content: "24 hours", description: "I usually respond quickly" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-card/30 transition-all duration-300"
                >
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{contact.title}</h4>
                    <p className="text-primary font-medium">{contact.content}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rishita-kumari-03970835a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition transform hover:scale-110"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/rishana._.1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition transform hover:scale-110"
                aria-label="Instagram profile"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.behance.net/your-behance-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition transform hover:scale-110"
                aria-label="Behance profile"
              >
                <FaBehance size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
