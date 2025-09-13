import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "AlzyCare - Alzheimer's Caregiver Support App",
    category: "iOS Development",
    description:
      "Developed an iOS app with SAGE cognitive assessment, daily task recommendations, and reminiscence therapy. Implemented CoreML model achieving 92% accuracy in early detection.",
    image: "Alzycare.png",
    tags: ["iOS", "CoreML", "Firebase", "Core Data", "UIKit"],
    color: "from-primary/20 to-accent/20",
    github: "https://github.com/Riishita/Alzycare", //GitHub link
    live: "#", // optional live demo
  },
  {
    title: "Fingerprint Recognition System",
    category: "AI/ML",
    description:
      "Built biometric authentication using Python & OpenCV (SIFT algorithm) with MySQL integration. Achieved >95% matching accuracy for altered vs. original fingerprints.",
    image: "/Fingerprint.png",
    tags: ["Python", "OpenCV", "scikit-learn", "MySQL", "Computer Vision"],
    color: "from-accent/20 to-secondary/20",
    github: "https://github.com/yourusername/fingerprint-system",
    live: "#",
  },
  {
    title: "SafeBite - Food Allergy Detection App",
    category: "iOS Development",
    description:
      "Created an AI-powered food safety app using OCR to detect allergens from food labels. Achieved 95% detection accuracy using real-world product datasets.",
    image: "/Safebite.jpg",
    tags: ["SwiftUI", "OCR", "Food Safety", "Preventive Healthcare", "Machine Learning"],
    color: "from-secondary/20 to-primary/20",
    github: "https://github.com/yourusername/safebite",
    live: "#",
  },
  {
    title: "Hospital Management System",
    category: "iOS Development",
    description:
      "Developed comprehensive hospital management applications including Admin iPad App, Doctor iPad App with PencilKit integration, and Patient iPhone App.",
    image: "HMS.png",
    tags: ["UIKIT", "Firebase", "PencilKit"],
    color: "from-primary/20 to-accent/20",
    github: "https://github.com/Riishita/HMS-Hospital-management-system-",
    live: "#",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features 3D animations and interactive UI components.",
    image: "/Portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "3D Graphics", "Responsive Design"],
    color: "from-accent/20 to-secondary/20",
    github: "https://github.com/yourusername/portfolio",
    live: "https://github.com/Riishita/Portfolio",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work across iOS development, AI/ML, and web
            development projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 overflow-hidden glow-hover">
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted/30 text-muted-foreground px-2 py-1 rounded text-xs border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                      >
                        View Project
                      </Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      {/* Live Demo Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert("Currently not available")}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Live Demo
                    </Button>

                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
