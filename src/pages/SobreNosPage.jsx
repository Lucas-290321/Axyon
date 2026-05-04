import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function SobreNosPage() {
  return (
    <>
      <Helmet>
        <title>Sobre nós - Axyon</title>
        <meta name="description" content="Conheça a Axyon, nossa história, missão e valores. Somos especialistas em engenharia de software com foco em inovação e excelência." />
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
                Sobre a Axyon
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Engenharia de software com visão de futuro
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa história</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A Axyon nasceu da convicção de que a tecnologia deve ser um catalisador de transformação real nos negócios. Fundada por engenheiros de software com vasta experiência em projetos de alta complexidade, nossa empresa se estabeleceu como referência em desenvolvimento de soluções digitais sob medida.
                  </p>
                  <p>
                    Desde o início, adotamos uma abordagem que combina rigor técnico com visão estratégica. Não nos limitamos a escrever código — construímos arquiteturas robustas, escaláveis e preparadas para o futuro. Cada projeto é tratado como uma oportunidade de superar expectativas e estabelecer novos padrões de qualidade.
                  </p>
                  <p>
                    Nossa trajetória é marcada pela constante busca por inovação. Investimos continuamente em pesquisa, capacitação e adoção de tecnologias emergentes, garantindo que nossos clientes sempre tenham acesso às soluções mais avançadas do mercado.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1684400661290-50c3f2600cf0"
                    alt="Equipe Axyon trabalhando em projetos inovadores"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[
                {
                  icon: Target,
                  title: 'Missão',
                  description: 'Desenvolver soluções tecnológicas de excelência que impulsionem a transformação digital de empresas, combinando inovação técnica com impacto estratégico mensurável.'
                },
                {
                  icon: Eye,
                  title: 'Visão',
                  description: 'Ser reconhecida como a parceira tecnológica de referência para empresas que buscam soluções digitais de alto nível, estabelecendo novos padrões de qualidade e inovação no setor.'
                },
                {
                  icon: Award,
                  title: 'Valores',
                  description: 'Excelência técnica, inovação contínua, transparência nas relações, compromisso com resultados e desenvolvimento sustentável de soluções que geram valor real.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 sm:p-8 min-h-[260px] border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/30 rounded-2xl p-12 md:p-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nossa perspectiva tecnológica</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Acreditamos que a tecnologia deve ser invisível ao usuário final, mas fundamental para o sucesso do negócio. Por isso, desenvolvemos soluções que equilibram sofisticação técnica com simplicidade de uso, garantindo que a complexidade fique onde deve estar: na arquitetura, não na experiência.
                </p>
                <p>
                  Nossa abordagem é fundamentada em três pilares: <strong className="text-foreground">inovação contínua</strong>, através da adoção criteriosa de tecnologias emergentes; <strong className="text-foreground">escalabilidade inteligente</strong>, projetando sistemas que crescem com o negócio; e <strong className="text-foreground">segurança por design</strong>, incorporando proteção em cada camada da solução.
                </p>
                <p>
                  Não seguimos tendências por modismo. Cada decisão tecnológica é baseada em análise rigorosa de requisitos, projeções de crescimento e alinhamento estratégico com os objetivos do cliente. O resultado são sistemas que não apenas funcionam hoje, mas estão preparados para os desafios de amanhã.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}