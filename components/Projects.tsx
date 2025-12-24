import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Reveal } from './Reveal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  // Categorias atualizadas para refletir a amplitude da pesquisa atual
  const categories = ['Todos', 'Health Tech', 'LLM Agents', 'NLP', 'Computer Vision', 'Bioinformatics', 'IoT', 'Agriculture', 'Cybersecurity'];

  const filteredProjects = activeCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(project => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">Projetos em Destaque</h2>
            <p className="text-slate-400 text-lg mb-8">
              Desenvolvimentos focados em segurança, saúde, agricultura de precisão e bioinformática, utilizando o que há de mais moderno em IA e Ciência de Dados.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                    activeCategory === category
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/30'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 min-h-[500px]">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} width="100%"> 
              <div className="group bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full">
                
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Badge over Image */}
                  <div className="absolute top-4 left-4 z-20">
                     <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-sm border border-slate-700 text-xs text-blue-300 rounded-full font-bold uppercase tracking-wider">
                       {project.tags[0]}
                     </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <a 
                      href={project.link}
                      className="text-slate-500 hover:text-white transition-colors mt-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Project"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-6 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(1, 4).map(tag => (
                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-950 text-slate-500 border border-slate-800 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6 pt-6 border-t border-slate-800">
                      <a 
                        href={project.repoLink || "#"} 
                        className="flex items-center gap-2 text-xs text-slate-300 hover:text-blue-400 transition-colors font-bold uppercase tracking-widest"
                      >
                        <Github size={16} /> Código
                      </a>
                      <a 
                        href={project.link} 
                        className="flex items-center gap-2 text-xs text-slate-300 hover:text-blue-400 transition-colors font-bold uppercase tracking-widest"
                      >
                        <ExternalLink size={16} /> Detalhes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-20 text-center">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-slate-100 rounded-full border border-slate-800 hover:bg-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all font-bold"
            >
              <Github size={20} />
              Ver Repositório Completo no GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};