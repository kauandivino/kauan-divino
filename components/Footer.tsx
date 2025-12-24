import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Kauan Divino. Todos os direitos reservados.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Pesquisa e Inovação em IA.
        </p>
      </div>
    </footer>
  );
};