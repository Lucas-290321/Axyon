import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'axyondesenvolvimento@gmail.com',
      href: 'mailto:axyondesenvolvimento@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(21) 99072-4800/97077-3272',
      href: 'https://wa.me/5521970773272'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Rio de Janeiro, RJ - Brasil',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Axyon</title>
        <meta name="description" content="Entre em contato com a Axyon. Estamos prontos para transformar suas ideias em soluções digitais de alto impacto." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Entre em contato
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Vamos conversar sobre como podemos ajudar seu negócio a crescer com tecnologia
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Informações de contato</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-foreground hover:text-primary transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Redes sociais</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 min-h-[260px] border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Horário de atendimento</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 13h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}