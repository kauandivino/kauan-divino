import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Description */}
          <Reveal delay={200}>
            <div className="prose prose-lg text-slate-400">
              <p className="leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>
              <p className="mt-4 leading-relaxed">
                Acredito que a Inteligência Artificial deve ser desenvolvida com transparência e responsabilidade. Meu trabalho busca não apenas avançar o estado da arte em performance, mas também garantir que esses sistemas sejam interpretáveis e justos.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Education Timeline */}
          <div className="relative">
            <Reveal delay={300}>
               <h3 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-2">
                 <GraduationCap className="text-blue-500" />
                 Formação Acadêmica
               </h3>
            </Reveal>

            <div className="space-y-0">
              {ABOUT_CONTENT.education.map((edu, index) => (
                <Reveal key={index} delay={300 + (index * 100)}>
                  <div className="relative pl-8 pb-10 border-l border-slate-800 last:border-0 last:pb-0 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] bg-slate-950 border-2 border-slate-700 rounded-full group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                      <div className="w-2 h-2 bg-slate-700 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500 transition-colors"></div>
                    </div>

                    <div className="flex flex-col gap-1 -mt-1.5">
                      <h4 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h4>
                      
                      <p className="text-slate-400 text-sm font-medium">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-400">
                          <Calendar size={12} />
                          {edu.year}
                        </span>
                        <span className="text-xs text-slate-500 italic">
                          {edu.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};