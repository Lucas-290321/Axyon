import { useState } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Nome é obrigatório');
      return false;
    }

    if (!formData.email.trim()) {
      setError('Email é obrigatório');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Email inválido');
      return false;
    }

    if (!formData.message.trim()) {
      setError('Mensagem é obrigatória');
      return false;
    }

    if (formData.message.trim().length < 10) {
      setError('Mensagem deve ter pelo menos 10 caracteres');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError(null);

    try {
      // 🔥 Mensagem formatada
      const mensagem = `Nome: ${formData.name}
Email: ${formData.email}
Mensagem: ${formData.message}`;

      const numero = '5521990724800'; // 🔥 COLOQUE SEU NÚMERO REAL

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      // 🔥 ABRE IMEDIATAMENTE (EVITA BLOQUEIO)
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, '_blank');
      }

      // 🔥 EXECUTA EM SEGUNDO PLANO (NÃO BLOQUEIA O WHATSAPP)
      setTimeout(async () => {
        try {
          // Salva no banco
          await pb.collection('contacts').create({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          }, { $autoCancel: false });

          // Envia email
          await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });

        } catch (err) {
          console.error('Erro secundário:', err);
        }
      }, 0);

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error(err);
      setError('Erro ao enviar mensagem.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setError(null);
    setSuccess(false);
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
    resetForm
  };
}