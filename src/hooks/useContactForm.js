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
    if (!formData.name.trim()) return setError('Nome obrigatório'), false;
    if (!formData.email.trim()) return setError('Email obrigatório'), false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return setError('Email inválido'), false;
    if (!formData.message.trim()) return setError('Mensagem obrigatória'), false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError(null);

    try {
      // 🔥 MENSAGEM WHATSAPP
      const mensagem = `Nome: ${formData.name}
Email: ${formData.email}
Mensagem: ${formData.message}`;

      const numero = '5521990724800'; // 🔥 SEU NÚMERO
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      // 🔥 ABRE WHATSAPP IMEDIATO
      const isMobile = /Android|iPhone/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, '_blank');
      }

      // 🔥 ENVIA EMAIL (SEM BACKEND)
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

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error(err);
      setError('Erro ao enviar.');
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