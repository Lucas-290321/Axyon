import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Database, Workflow, Link2, Building2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function ServicosPage() {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento web',
      description: 'Criamos aplicações web modernas, responsivas e de alta performance utilizando as tecnologias mais avançadas do mercado. Desde landing pages institucionais até plataformas complexas, desenvolvemos soluções que combinam design excepcional com arquitetura robusta.',
      features: ['React, Vue, Angular', 'Progressive Web Apps', 'SEO e performance otimizados', 'Design responsivo e acessível']
    },
    {
      icon: Database,
      title: 'Sistemas customizados',
      description: 'Desenvolvemos sistemas sob medida que atendem necessidades específicas do seu negócio. Desde ERPs até plataformas de gestão especializadas, criamos soluções que se integram perfeitamente aos seus processos e escalam conforme sua empresa cresce.',
      features: ['Arquitetura escalável', 'Integração com sistemas legados', 'Dashboards e relatórios avançados', 'Controle de acesso granular']
    },
    {
      icon: Workflow,
      title: 'Automação de processos',
      description: 'Identificamos gargalos operacionais e desenvolvemos soluções de automação que aumentam a eficiência, reduzem erros e liberam sua equipe para atividades estratégicas. Transformamos processos manuais em fluxos automatizados e inteligentes.',
      features: ['RPA e automação inteligente', 'Workflows customizados', 'Integração entre sistemas', 'Monitoramento e alertas']
    },
    {
      icon: Link2,
      title: 'Integrações e APIs',
      description: 'Conectamos seus sistemas e serviços através de APIs robustas e bem documentadas. Desenvolvemos integrações que permitem que diferentes plataformas conversem entre si de forma segura, eficiente e escalável.',
      features: ['REST e GraphQL APIs', 'Webhooks e eventos em tempo real', 'Documentação completa', 'Segurança e autenticação']
    },
    {
      icon: Building2,
      title: 'Soluções empresariais',
      description: 'Desenvolvemos plataformas corporativas completas que atendem às demandas de grandes organizações. Sistemas de gestão, portais internos, ferramentas de colaboração e muito mais, sempre com foco em segurança, escalabilidade e performance.',
      features: ['Arquitetura enterprise', 'Alta disponibilidade', 'Segurança avançada', 'Suporte e manutenção']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Axyon</title>
        <meta name="description" content="Conheça nossos serviços de desenvolvimento web, sistemas customizados, automação de processos, integrações e soluções empresariais." />
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
                Nossos serviços
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soluções tecnológicas completas para transformar seu negócio
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden bg-muted/30 p-12 border border-border">
                      <div className="absolute inset-0 tech-grid opacity-30" />
                      <div className="relative z-10 flex items-center justify-center h-64">
                        <service.icon className="w-32 h-32 text-primary/20" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}