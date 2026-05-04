import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import SobreNosPage from './pages/SobreNosPage.jsx';
import ServicosPage from './pages/ServicosPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import FerramentasPage from './pages/FerramentasPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobreNosPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/ferramentas" element={<FerramentasPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
                <p className="text-muted-foreground mb-6">A página que você procura não existe.</p>
                <a href="/" className="text-primary hover:underline">Voltar para home</a>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;