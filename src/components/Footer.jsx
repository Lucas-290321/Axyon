import React from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/contato', label: 'Contato' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'www.linkedin.com/in/axyon-desenvolvimento-003b07408',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/useaxyon?igsh=bXFocmtpYnEwcjU0',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="bg-card border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* LOGO + DESCRIÇÃO */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-5">

              <img
                src="/Logo_01.jpeg"
                alt="Axyon Logo"
                className="
                  w-12 h-12
                  sm:w-14 sm:h-14
                  object-cover
                  rounded-xl
                  shadow-lg
                  border border-white/10
                  flex-shrink-0
                "
              />

              <span
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-card-foreground
                  truncate
                "
              >
                Axyon
              </span>
            </div>

            <p
              className="
                text-sm
                sm:text-base
                text-muted-foreground
                leading-relaxed
                mb-5
                max-w-md
              "
            >
              Engenharia de software com visão de futuro.
            </p>

            {/* REDES SOCIAIS */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-muted
                    flex
                    items-center
                    justify-center
                    text-muted-foreground
                    hover:bg-primary
                    hover:text-primary-foreground
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="w-full">
            <span
              className="
                text-base
                font-semibold
                text-card-foreground
                mb-5
                block
              "
            >
              Links rápidos
            </span>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    text-sm
                    sm:text-base
                    text-muted-foreground
                    hover:text-card-foreground
                    transition-colors
                    duration-200
                    break-words
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTATO */}
          <div className="w-full">
            <span
              className="
                text-base
                font-semibold
                text-card-foreground
                mb-5
                block
              "
            >
              Contato
            </span>

            <div className="flex flex-col gap-4">

              {/* EMAIL */}
              <a
                href="mailto:axyondesenvolvimento@gmail.com?subject=Quero%20fazer%20uma%20consultoria%2For%C3%A7amento"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  sm:text-base
                  text-muted-foreground
                  hover:text-card-foreground
                  transition-colors
                  duration-200
                  break-all
                "
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />

                <span className="leading-relaxed">
                  axyondesenvolvimento@gmail.com
                </span>
              </a>

              {/* TELEFONE */}
              <a
                href="https://wa.me/5521990724800"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  sm:text-base
                  text-muted-foreground
                  hover:text-card-foreground
                  transition-colors
                  duration-200
                  break-words
                "
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />

                <span className="leading-relaxed">
                  (21) 99072-4800 / 97077-3272
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="pt-8 border-t border-border">
          <div
            className="
              flex
              flex-col
              lg:flex-row
              justify-between
              items-center
              gap-5
              text-center
              lg:text-left
            "
          >
            <p
              className="
                text-sm
                text-muted-foreground
                leading-relaxed
              "
            >
              © {currentYear} Axyon. Todos os direitos reservados.
            </p>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                gap-4
                sm:gap-6
              "
            >
              <Link
                to="/privacidade"
                className="
                  text-sm
                  text-muted-foreground
                  hover:text-card-foreground
                  transition-colors
                  duration-200
                "
              >
                Política de Privacidade
              </Link>

              <Link
                to="/termos"
                className="
                  text-sm
                  text-muted-foreground
                  hover:text-card-foreground
                  transition-colors
                  duration-200
                "
              >
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}