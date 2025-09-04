import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'Python', 'Swift', 'C'],
    color: 'from-primary to-accent'
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'MERN stack'],
    color: 'from-accent to-primary'
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    skills: ['CoreML', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP', 'Scikit-learn'],
    color: 'from-primary to-secondary'
  },
  {
    category: 'Databases & Cloud',
    icon: '☁️',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'Firestore'],
    color: 'from-secondary to-accent'
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Xcode', 'VS Code', 'Git/GitHub', 'Jira', 'canva & Figma'],
    color: 'from-accent to-primary'
  },
  {
    category: 'Soft Skills',
    icon: '🚀',
    skills: ['Problem Solving', 'Critical Thinking', 'Communication', 'Teamwork', 'Adaptability'],
    color: 'from-primary to-secondary'
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences and AI-driven solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full glow-hover">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl mb-4">{skillSet.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">
                    {skillSet.category}
                  </h3>
                  <div className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground bg-muted/30 rounded-full px-3 py-1 border border-border/50"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '8.41', label: 'CGPA' },
            { number: '0', label: 'Years Experience' },
            { number: '92%', label: 'ML Model Accuracy' },
            { number: '95%', label: 'Project Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};