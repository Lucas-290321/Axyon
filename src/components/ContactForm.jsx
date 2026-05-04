import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactForm() {
  const { formData, loading, error, success, handleChange, handleSubmit } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-6 sm:p-8 min-h-[260px] border border-border"
    >
      <h3 className="text-2xl font-semibold mb-6 text-foreground">Envie sua mensagem</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
            Nome completo
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            disabled={loading}
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            disabled={loading}
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
            Mensagem
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Descreva seu projeto ou dúvida..."
            rows={5}
            required
            disabled={loading}
            className="bg-background text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-primary">Mensagem enviada com sucesso. Retornaremos em breve.</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full group"
        >
          {loading ? (
            'Enviando...'
          ) : (
            <>
              Enviar mensagem
              <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}