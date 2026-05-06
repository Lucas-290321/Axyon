import { useState } from 'react';
import emailjs from 'emailjs-com';

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
      // Monta mensagem do WhatsApp
      const mensagem = `Nome: ${formData.name}
Email: ${formData.email}
Mensagem: ${formData.message}`;

      const numero = '5521990724800'; 
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      // Abre WhatsApp SEM quebrar o app
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, '_blank');
      }

      //  Envia email (não quebra o app se falhar)
      try {
        await emailjs.send(
          'service_kym4obg',   
          'template_299pxzl',  
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          },
          '2GWDk5_pO306p3r6_'    
        );
      } catch (emailError) {
        console.error('Erro no EmailJS:', emailError);
      }

      //  Sempre executa (evita tela preta)
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error('Erro geral:', err);
      setError('Erro ao enviar mensagem.');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit
  };
}