import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Estou sempre aberto a discutir novas pesquisas, colaborações acadêmicas ou oportunidades de consultoria em IA.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-full">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:kauan@discente.ufg.br" className="text-xl font-semibold hover:text-blue-400 transition-colors">
                      kauan@discente.ufg.br
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-4">Redes Sociais</p>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map(link => (
                      <a 
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 transition-all duration-300 text-slate-400"
                        aria-label={link.platform}
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Side */}
          <Reveal delay={200}>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Profissional</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="nome@empresa.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Como posso ajudar?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-1'
                  } disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {status === 'submitting' ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={20} /> Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      Enviar Mensagem <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};