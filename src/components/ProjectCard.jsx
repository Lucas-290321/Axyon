import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pb from '@/lib/pocketbaseClient';

export default function ProjectCard({ project, index, featured = false }) {
  const imageUrl = project.image 
    ? pb.files.getUrl(project, project.image)
    : 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{project.name}</h3>
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.split(',').map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          )}
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            {project.description || 'Projeto desenvolvido com tecnologias modernas e foco em performance.'}
          </p>
          {project.link && (
            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full group/btn"
                onClick={() => window.open(project.link, '_blank')}
              >
                Ver projeto
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}