import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ToolCard from '@/components/ToolCard.jsx';
import pb from '@/lib/pocketbaseClient';

export default function FerramentasPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const records = await pb.collection('tools').getFullList({
          sort: '-created',
          $autoCancel: false
        });
        setTools(records);
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  const exampleTools = [
    {
      id: 'example-1',
      name: 'CodeGen Pro',
      description: 'Gerador automático de código boilerplate para acelerar o desenvolvimento de APIs REST.',
      technicalDescription: 'Ferramenta CLI desenvolvida em Node.js que analisa schemas de banco de dados e gera automaticamente controllers, models, routes e testes unitários seguindo padrões de arquitetura limpa.',
      image: null,
      documentation: null,
      status: 'finalizada'
    },
    {
      id: 'example-2',
      name: 'DataFlow Analyzer',
      description: 'Analisador de fluxo de dados para identificar gargalos em pipelines de processamento.',
      technicalDescription: 'Sistema de monitoramento em tempo real que rastreia o fluxo de dados através de microserviços, identifica latências e sugere otimizações baseadas em machine learning.',
      image: null,
      documentation: null,
      status: 'em_desenvolvimento'
    },
    {
      id: 'example-3',
      name: 'SecureAuth Kit',
      description: 'Biblioteca de autenticação e autorização pronta para integração em projetos web.',
      technicalDescription: 'SDK completo com suporte a JWT, OAuth 2.0, autenticação multifator e gerenciamento de sessões. Inclui middlewares para Express, Fastify e Koa.',
      image: null,
      documentation: null,
      status: 'finalizada'
    }
  ];

  const displayTools = tools.length > 0 ? tools : exampleTools;

  return (
    <>
      <Helmet>
        <title>Ferramentas - Axyon</title>
        <meta name="description" content="Conheça as ferramentas desenvolvidas pela Axyon para otimizar processos de desenvolvimento e aumentar a produtividade." />
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
                Nossas ferramentas
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soluções desenvolvidas internamente para otimizar processos e aumentar a produtividade
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="h-48 bg-muted animate-pulse" />
                    <div className="p-6 space-y-3">
                      <div className="h-6 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            ) : displayTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayTools.map((tool, index) => (
                  <ToolCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Nenhuma ferramenta disponível no momento.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}