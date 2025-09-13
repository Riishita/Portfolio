import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D';
import heroImage from '@/assets/hero-3d.jpg';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Create hidden link for download
    const link = document.createElement('a');
    link.href = '/Rishita_Resume.pdf'; // make sure resume is inside public folder
    link.download = 'Rishita_Kumari_Resume.pdf';
    link.click();

    // Show "Downloaded" state
    setDownloaded(true);

    // Reset after 4 seconds
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mesh-overlay" />

      {/* 3D Canvas */}
      <Hero3D />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gradient mb-6"
          >
            Hi, I'm Rishita Kumari
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            B.Tech Computer Science (AI & ML) Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            I’m a passionate Full-Stack Web Developer, iOS App Developer, and Graphic/UI-UX Designer with a focus on creating impactful digital experiences. From designing intuitive user interfaces to building scalable apps and websites, I bring creativity and code together to solve real-world problems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
            >
              {downloaded ? " CV Downloaded" : "Download CV"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
