import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Axyon - Transformando ideias em soluções digitais de alto impacto</title>
        <meta
          name="description"
          content="Engenharia de software com visão de futuro. Desenvolvemos soluções digitais inovadoras e escaláveis para empresas que buscam excelência tecnológica."
        />
        <meta name="google" content="notranslate" />
      </Helmet>

      <div className="min-h-screen bg-background notranslate" translate="no">
        <Header />

        <div className="hero-grain" />

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <img
                    src="https://cdn.discordapp.com/attachments/1486159287070756995/1501036165816516799/WhatsApp_Image_2026-05-03_at_11.08.08_coopia.jpeg?ex=69fa9c5d&is=69f94add&hm=a6d20ad2aef60d77e5d4573dadee9366dc2cb40ee66154672c39fcbd92c77d0f&"
                    alt="Axyon Logo"
                    className="h-20 w-20 rounded-lg mb-6"
                  />
                </div>

                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight break-words notranslate"
                  translate="no"
                >
                  Transformando ideias em soluções digitais de alto impacto
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Desenvolvemos software sob medida com tecnologias de ponta,
                  focando em escalabilidade, performance e inovação contínua.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="group w-full sm:w-auto">
                    <Link to="/sobre">
                      Conhecer a <span className="notranslate" translate="no">Axyon</span>
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link to="/contato">Fale conosco</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                  <img
                    src="https://horizons-cdn.hostinger.com/8d4d2314-a9fa-472c-8ad8-c9a7c6159296/captura-de-tela-2026-05-03-190021-3utMk.png"
                    alt="Desenvolvimento de software moderno"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 notranslate"
                translate="no"
              >
                Por que escolher a <span className="notranslate">Axyon</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Combinamos expertise técnica com visão estratégica para entregar
                resultados excepcionais
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code2,
                  title: 'Tecnologia de ponta',
                  description:
                    'Utilizamos as ferramentas e frameworks mais modernos do mercado para garantir soluções robustas e escaláveis.',
                },
                {
                  icon: Zap,
                  title: 'Agilidade e eficiência',
                  description:
                    'Processos otimizados e metodologias ágeis para entregas rápidas sem comprometer a qualidade.',
                },
                {
                  icon: Shield,
                  title: 'Segurança e confiabilidade',
                  description:
                    'Implementamos as melhores práticas de segurança e testes rigorosos em cada projeto.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 sm:p-8 min-h-[280px] border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3
                    className="text-base sm:text-lg font-semibold mb-3 break-words leading-snug notranslate"
                    translate="no"
                  >
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 sm:p-10 md:p-16 text-center border border-primary/20"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 notranslate"
                translate="no"
              >
                Pronto para transformar sua ideia em realidade?
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato e descubra como podemos ajudar sua empresa a
                alcançar novos patamares com tecnologia de ponta.
              </p>

              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link to="/contato">
                  Iniciar projeto
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}