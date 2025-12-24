import React from 'react';
import { Reveal } from './Reveal';
import { HERO_CONTENT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-900 rounded-full blur-[100px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-indigo-900 rounded-full blur-[100px] opacity-20 -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center gap-12">
        
        {/* Image Section - Centered at the top */}
        <div className="flex justify-center relative">
          <Reveal delay={200}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden relative z-10 bg-slate-900">
                {/* User Profile Image */}
                <img 
                  src="/profile.png" 
                  alt="Kauan Divino" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative Circle Ring */}
              <div className="absolute inset-0 border border-slate-800 rounded-full scale-110 -z-0 animate-pulse-slow"></div>
            </div>
          </Reveal>
        </div>

        {/* Text Section - Centered below image */}
        <div className="flex flex-col items-center max-w-3xl">
          <Reveal>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-300 text-xs font-semibold tracking-wide mb-6 border border-blue-800/50">
              DISPONÍVEL PARA COLABORAÇÕES
            </span>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-100 leading-tight mb-6">
              {HERO_CONTENT.name}
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <h2 className="text-xl md:text-3xl text-slate-400 font-medium mb-8">
              {HERO_CONTENT.role}
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
};