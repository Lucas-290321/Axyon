import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';

export default function GaleriaPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      alt: 'Desenvolvimento de código em ambiente moderno',
      category: 'Desenvolvimento'
    },
    {
      src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      alt: 'Interface de sistema de gestão empresarial',
      category: 'Sistemas'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      alt: 'Dashboard analítico com métricas em tempo real',
      category: 'Analytics'
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      alt: 'Visualização de dados e gráficos interativos',
      category: 'Data Viz'
    },
    {
      src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
      alt: 'Arquitetura de microserviços em nuvem',
      category: 'Cloud'
    },
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      alt: 'Interface mobile responsiva',
      category: 'Mobile'
    },
    {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      alt: 'Equipe colaborando em projeto de software',
      category: 'Equipe'
    },
    {
      src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6',
      alt: 'Desenvolvimento de API REST',
      category: 'Backend'
    },
    {
      src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      alt: 'Design de interface de usuário moderna',
      category: 'UI/UX'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Galeria - Axyon</title>
        <meta name="description" content="Explore nossa galeria de projetos, interfaces e soluções desenvolvidas pela Axyon." />
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
                Galeria de projetos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Uma seleção visual dos nossos trabalhos e soluções desenvolvidas
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="break-inside-avoid">
                  <GalleryImage
                    src={image.src}
                    alt={image.alt}
                    category={image.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}