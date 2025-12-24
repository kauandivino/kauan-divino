import React, { useMemo } from 'react';
import { FileText, Calendar, Link as LinkIcon, Book, Mic2, Layers } from 'lucide-react';
import { PUBLICATIONS } from '../constants';
import { Reveal } from './Reveal';

export const Publications: React.FC = () => {
  // Group publications by category
  const groupedPublications = useMemo(() => {
    const groups: { [key: string]: typeof PUBLICATIONS } = {};
    
    // Define custom order for categories
    const order = [
      "Artigos em Periódicos",
      "Trabalhos Completos em Congressos",
      "Resumos em Anais de Congressos",
      "Outras Produções Bibliográficas"
    ];

    PUBLICATIONS.forEach(pub => {
      if (!groups[pub.category]) {
        groups[pub.category] = [];
      }
      groups[pub.category].push(pub);
    });

    // Return entries sorted by the custom order
    return Object.entries(groups).sort((a, b) => {
      const indexA = order.indexOf(a[0]);
      const indexB = order.indexOf(b[0]);
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });
  }, []);

  const getCategoryIcon = (category: string) => {
    if (category.includes("Periódicos")) return <Book size={20} className="text-blue-500" />;
    if (category.includes("Apresentações")) return <Mic2 size={20} className="text-purple-500" />;
    if (category.includes("Congressos")) return <Layers size={20} className="text-green-500" />;
    return <FileText size={20} className="text-slate-400" />;
  };

  return (
    <section id="publications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Produção Científica</h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <a href="#" className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-2">
              Ver Google Scholar <LinkIcon size={16} />
            </a>
          </div>
        </Reveal>

        <div className="space-y-16">
          {groupedPublications.map(([category, items], groupIndex) => (
            <div key={category}>
              <Reveal delay={groupIndex * 100}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
                  {getCategoryIcon(category)}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-200">{category}</h3>
                  <span className="text-sm bg-slate-900 text-slate-500 py-1 px-3 rounded-full border border-slate-800">
                    {items.length}
                  </span>
                </div>
              </Reveal>

              <div className="space-y-8">
                {items.map((pub, index) => (
                  <Reveal key={pub.id} delay={100 + (index * 50)}>
                    <div className="group relative pl-6 border-l-2 border-slate-800 hover:border-slate-600 transition-colors">
                      
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-bold text-slate-100 leading-snug group-hover:text-blue-400 transition-colors">
                          {pub.title}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                           <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-300 bg-blue-900/20 border border-blue-900/30 px-2 py-0.5 rounded">
                            <Calendar size={12} />
                            <span>{pub.year}</span>
                          </div>
                          <span className="text-sm text-slate-400 italic font-medium">
                            {pub.venue}
                          </span>
                        </div>

                        <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">
                          {pub.authors}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};