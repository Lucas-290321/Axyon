import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/ferramentas', label: 'Ferramentas' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${
            isScrolled
              ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
              : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 min-w-0 group"
            >
              <img
                src="/Logo_02.jpeg"
                alt="Axyon Logo"
                className="
                  w-10 h-10
                  sm:w-12 sm:h-12
                  md:w-14 md:h-14
                  object-cover
                  rounded-xl
                  shadow-lg
                  border border-white/10
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  flex-shrink-0
                "
              />

              <span
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  text-foreground
                  whitespace-nowrap
                  truncate
                "
              >
                Axyon
              </span>
            </Link>

            {/* MENU DESKTOP */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    whitespace-nowrap
                    ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* BOTÃO MOBILE */}
            <Button
              variant="ghost"
              size="icon"
              className="
                lg:hidden
                flex-shrink-0
                w-10 h-10
              "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isMobileMenuOpen
                ? 'max-h-[600px] opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >
          <div className="bg-background/98 backdrop-blur-xl border-t border-border shadow-2xl">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ESPAÇAMENTO PARA HEADER FIXO */}
      <div className="h-20" />
    </>
  );
}