import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import pb from '@/lib/pocketbaseClient';

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const records = await pb.collection('projects').getFullList({
          filter: 'status="active"',
          sort: '-created',
          $autoCancel: false
        });
        setProjects(records);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const exampleProjects = [
    {
      id: 'example-1',
      name: 'Gerenciamento de estoque e eventos empresarial',
      description: 'Sistema completo de ERP desenvolvido para otimizar processos de uma empresa de médio porte, incluindo, estoque, agenda, financeiro e relatórios avançados.',
      technologies: 'React, Node.js, SQL, Python, Java',
      image: "https://cdn.discordapp.com/attachments/1486159287070756995/1501051316393480265/image.png?ex=69faaa7a&is=69f958fa&hm=cda0d8ec46d4cc210e7f00daacb5ee3a276d93c7b408588ff0dd14a7f2a4b290&",
      link: null
    },
    {
      id: 'example-2',
      name: 'Portal de e-commerce B2B',
      description: 'Marketplace especializado em vendas corporativas com sistema de cotações, aprovações em múltiplos níveis e integração com ERPs de clientes.',
      technologies: 'Next.js, GraphQL, MongoDB, AWS',
      image: null,
      link: null
    },
    {
      id: 'example-3',
      name: 'Sistema de automação industrial',
      description: 'Plataforma IoT para monitoramento e controle de equipamentos industriais em tempo real, com dashboards analíticos e alertas inteligentes.',
      technologies: 'Vue.js, Python, InfluxDB, MQTT',
      image: null,
      link: null
    },
    {
      id: 'example-4',
      name: 'App de gestão de projetos',
      description: 'Ferramenta colaborativa para gerenciamento ágil de projetos com recursos de kanban, gantt, timesheet e integração com ferramentas de comunicação.',
      technologies: 'React, TypeScript, Supabase, WebSockets',
      image: null,
      link: null
    }
  ];

  const displayProjects = projects.length > 0 ? projects : exampleProjects;

  return (
    <>
      <Helmet>
        <title>Portfólio - Axyon</title>
        <meta name="description" content="Conheça nossos projetos e cases de sucesso. Desenvolvemos soluções digitais inovadoras para empresas de diversos segmentos." />
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
                Nosso portfólio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Projetos que demonstram nossa capacidade de transformar desafios em soluções inovadoras
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="h-64 bg-muted animate-pulse" />
                    <div className="p-6 space-y-3">
                      <div className="h-6 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            ) : displayProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    featured={index === 0}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Nenhum projeto disponível no momento.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}