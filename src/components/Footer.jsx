import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/contato', label: 'Contato' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.discordapp.com/attachments/1486159287070756995/1501036165816516799/WhatsApp_Image_2026-05-03_at_11.08.08_coopia.jpeg?ex=69fa9c5d&is=69f94add&hm=a6d20ad2aef60d77e5d4573dadee9366dc2cb40ee66154672c39fcbd92c77d0f&"
                alt="Axyon Logo"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-bold text-card-foreground">Axyon</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Engenharia de software com visão de futuro.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-card-foreground mb-4 block">Links rápidos</span>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-card-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold text-card-foreground mb-4 block">Contato</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:axyondesenvolvimento@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-card-foreground transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>axyondesenvolvimento@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5521990724800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-card-foreground transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>(21) 99072-4800</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Axyon. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-card-foreground transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-muted-foreground hover:text-card-foreground transition-colors duration-200">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}