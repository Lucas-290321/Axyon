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
      const mensagem = `Nome: ${formData.name}
Email: ${formData.email}
Mensagem: ${formData.message}`;

      const numero = '5521990724800'; // 🔥 TROQUE PELO SEU NÚMERO
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      // 🔥 1. ENVIA EMAIL (não quebra o app)
      try {
        await emailjs.send(
          'service_kym4obg',   // 🔥 TROCAR
          'template_299pxzl',  // 🔥 TROCAR
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          },
          '2GWDk5_pO306p3r6_'    // 🔥 TROCAR
        );
      } catch (emailError) {
        console.error('Erro no EmailJS:', emailError);
      }

      // 🔥 2. Atualiza UI (antes de abrir WhatsApp)
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // 🔥 3. Abre WhatsApp depois (evita tela preta)
      setTimeout(() => {
        window.open(url, '_blank');
      }, 300);

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