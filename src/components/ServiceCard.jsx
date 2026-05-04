import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="flex flex-col h-full bg-card rounded-2xl p-6 sm:p-8 min-h-[260px] border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="w-7 h-7" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}