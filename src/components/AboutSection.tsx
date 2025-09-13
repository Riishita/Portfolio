import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a passionate Full-Stack Web Developer, iOS App Developer, and Graphic/UI-UX Designer with a focus on creating impactful digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
            During my internship at Infosys, I worked on a Hospital Management System, contributing to three different apps (for patients, doctors, and administrators). 
            This experience gave me hands-on exposure to end-to-end app development, UI/UX design, and cross-functional teamwork in an Agile environment.

            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What I Do Best:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'iOS App Development',
                  'Web Development',
                  'AI & Machine Learning',
                  'UI/UX Design',
                  'CoreML Integration',
                  'Graphic Designing'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/Rishita_Resume.pdf" download>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
              >
                Download Resume
              </Button>
              </a>
              <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </Button>

            </div>
          </motion.div>

        {/* Profile Card */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="relative flex justify-center"
>
  <Card className="bg-card/50 backdrop-blur-sm border-border p-6 sm:p-8 glow-hover max-w-xs sm:max-w-sm md:max-w-md w-full">
    <CardContent className="space-y-6 p-0">
      {/* Profile Image Placeholder */}
      <div className="relative flex justify-center">
  <div className="w-40 sm:w-52 md:w-64 aspect-square mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/30 overflow-hidden">
    {/* Replace 👩‍💻 with your photo */}
    <img
      src="/ProfilePhoto.png" // put your photo path here (public folder or URL)
      alt="My Profile"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-12 sm:w-16 h-12 sm:h-16 bg-primary rounded-full flex items-center justify-center glow-primary">
    <span className="text-primary-foreground font-bold text-xs sm:text-sm">
      8.41
    </span>
  
  </div>
  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-12 sm:w-16 h-12 sm:h-16 bg-primary rounded-full flex items-center justify-center glow-primary">
    <span className="text-primary-foreground font-bold text-xs sm:text-sm">
      8.41
    </span>
  </div>
</div>

      {/* Details */}
      <div className="text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          Rishita Kumari
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          B.Tech Computer Science (AI & ML)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {[
            { icon: "📧", label: "Email", value: "rishitakumari206@gmail.com" },
            { icon: "📍", label: "Location", value: "Noida, India" },
            { icon: "💼", label: "Status", value: "Available for opportunities" },
          ].map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl mb-1">{info.icon}</div>
              <div className="text-xs text-muted-foreground">{info.label}</div>
              <div className="text-sm text-foreground font-medium break-words">
                {info.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>



            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full floating"></div>
<div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-300 rounded-full floating-delayed"></div>
<div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-300 rounded-full floating-slow"></div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};