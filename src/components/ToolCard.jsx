import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import pb from '@/lib/pocketbaseClient';

export default function ToolCard({ tool, index }) {
  const imageUrl = tool.image 
    ? pb.files.getUrl(tool, tool.image)
    : 'https://images.unsplash.com/photo-1555949963-aa79dcee981c';

  const statusLabel = tool.status === 'finalizada' ? 'Finalizada' : 'Em desenvolvimento';
  const statusVariant = tool.status === 'finalizada' ? 'default' : 'secondary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={tool.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4">
            <Badge variant={statusVariant} className="shadow-lg">
              {statusLabel}
            </Badge>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground">{tool.name}</h3>
            <Wrench className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
          </div>
          {tool.description && (
            <p className="text-muted-foreground leading-relaxed mb-4">
              {tool.description}
            </p>
          )}
          {tool.technicalDescription && (
            <div className="mb-4 p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.technicalDescription}
              </p>
            </div>
          )}
          {tool.documentation && (
            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full group/btn"
                onClick={() => window.open(tool.documentation, '_blank')}
              >
                <FileText className="mr-2 w-4 h-4" />
                Documentação
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}