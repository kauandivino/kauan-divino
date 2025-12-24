import { Project, Publication, NavItem } from './types';
import { Github, Linkedin, Mail, Instagram, BookOpen, Cpu, Network } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Publicações', href: '#publications' },
  { label: 'Contato', href: '#contact' },
];

export const HERO_CONTENT = {
  name: "Kauan Divino",
  role: "Pesquisador em Inteligência Artificial",
  intro: "Explorando as fronteiras do aprendizado de máquina profundo para criar sistemas inteligentes, éticos e escaláveis que resolvem problemas complexos do mundo real.",
};

export const ABOUT_CONTENT = {
  description: "Como pesquisador dedicado ao campo da Inteligência Artificial, meu foco reside na interseção entre teoria matemática rigorosa e aplicação prática. Tenho experiência profunda em arquiteturas de redes neurais, processamento de linguagem natural (NLP) e visão computacional.",
  education: [
    {
      degree: "Mestrado em Ciências da Computação",
      institution: "Universidade Federal de Goiás (UFG)",
      year: "2026 - 2027",
      type: "Pós-graduação Stricto Sensu"
    },
    {
      degree: "Bacharelado em Biotecnologia",
      institution: "Universidade Federal de Goiás (UFG)",
      year: "2025 - 2028",
      type: "Bacharelado"
    },
    {
      degree: "Especialização em Inteligência Artificial",
      institution: "Faculdade Iguaçu",
      year: "2025",
      type: "Pós-graduação Lato Sensu"
    },
    {
      degree: "Bacharelado em Inteligência Artificial",
      institution: "Universidade Federal de Goiás (UFG)",
      year: "2021 - 2024",
      type: "Bacharelado"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Detecção e Checagem de Fatos para Fake News em Saúde",
    description: "Combate à desinformação em vacinas utilizando agentes autônomos de IA, modelos de raciocínio e RAG. Gera relatórios técnicos e respostas automatizadas via WhatsApp para o público.",
    tags: ["LLM Agents", "Health Tech", "RAG", "NLP"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Segurança e Privacidade de Dados Multimodais",
    description: "Desenvolvimento de técnicas para garantir a proteção de dados sensíveis (imagens, vídeos, textos e áudios) contra vigilância cibernética e ataques de integridade.",
    tags: ["Cybersecurity", "Multimodal", "Privacy", "Research"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Sementes e Inovação",
    description: "Sistemas computacionais para identificação de espécies vegetais baseados em morfologia de sementes, digitalizando guias taxonômicos e automatizando a verificação laboratorial.",
    tags: ["Computer Vision", "Bioinformatics", "Botany"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Mineração Inteligente para Protocolos de Saúde",
    description: "Análise de similaridade de casos clínicos para sugerir alertas e condutas em prontuários eletrônicos, otimizando a tomada de decisão médica e gestão clínica.",
    tags: ["Data Mining", "Health Tech", "Decision Support"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Nature SPAM Filter",
    description: "Ferramenta de IA para identificar menções reais à vida selvagem em notícias online, comparando modelos zero-shot e LLMs para análise precisa de percepção social e conservação.",
    tags: ["NLP", "Conservation", "Zero-shot", "AI"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Etch A Cell - ImmunoExplorers",
    description: "Segmentação detalhada de células imunológicas em imagens de microscopia eletrônica para entender mecanismos de rejeição em transplantes renais. Colaboração com o Francis Crick Institute.",
    tags: ["Bio-Imaging", "Computer Vision", "Medical Research", "Segmentation"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1579154235884-10f5fe58b37a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Classificação de Plantas em Estufas IOT",
    description: "Análise multivariada de 30.000 registros fisiológicos utilizando Random Forest e XGBoost para discriminar perfis morfofisiológicos entre cultivos IOT e tradicionais.",
    tags: ["IoT", "Agriculture", "Machine Learning", "Multivariate Analysis"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1558444479-c8a02e624730?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "Modelagem Preditiva para Redução de Biópsias",
    description: "Modelo preditivo baseado em dados clínicos para diagnóstico de doenças eritemato-descamativas, alcançando 93% de acurácia e reduzindo a necessidade de procedimentos invasivos em 80%.",
    tags: ["Predictive Modeling", "Health Tech", "Dermatology", "Probabilistic ML"],
    link: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  }
];

export const PUBLICATIONS: Publication[] = [
  // Artigos em Periódicos
  {
    id: 1,
    category: "Artigos em Periódicos",
    title: "Emotion Talk: Emotional Support via Audio Messages for Psychological Assistance",
    authors: "MARIANO, K. D. P.; MONTEIRO, V. E. S. ; ALMADA, F. L. N. ; DUTRA, M. A.",
    year: 2024,
    venue: "Arxiv",
    description: "Citações: 62|60",
    link: "#"
  },
  {
    id: 2,
    category: "Artigos em Periódicos",
    title: "Lane Detection System for Driver Assistance in Vehicles",
    authors: "MARIANO, K. D. P.; Fernades, F. C. ; Oliveira, L. G. S. ; Rodrigues, L. E. S. ; Brandão, M. A.",
    year: 2024,
    venue: "Arxiv",
    description: "Citações: 62|60",
    link: "#"
  },
  {
    id: 3,
    category: "Artigos em Periódicos",
    title: "Smart Air Quality Monitoring for Automotive Workshop Environments",
    authors: "MARIANO, K. D. P.; ALMADA, F. L. N. ; DUTRA, M. A.",
    year: 2024,
    venue: "Arxiv",
    description: "Citações: 62|60",
    link: "#"
  },

  // Trabalhos Completos em Congressos
  {
    id: 4,
    category: "Trabalhos Completos em Congressos",
    title: "AKCIT-FN at CheckThat! 2025: Switching Fine-Tuned SLMs and LLM Prompting for Multilingual Claim Normalization",
    authors: "ALMADA, F. L. N. ; MARIANO, K. D. P. ; DUTRA, M. A. ; MONTEIRO, V. E. S. ; GOMES, J. R. S. ; Galvao, A. R. F. ; SORES, A. S.",
    year: 2025,
    venue: "Working Notes of CLEF 2025 - Conference and Labs of the Evaluation Forum",
    description: "p. 1053-1064, Madri. Aachen: CEUR-WS.",
    link: "#"
  },
  {
    id: 5,
    category: "Trabalhos Completos em Congressos",
    title: "Exploitation of Real Vulnerabilities in Language Models: Cases of Data Leakage, Jailbreaking, and Command Injection",
    authors: "MARIANO, K. D. P.",
    year: 2024,
    venue: "Anais do 19° Congresso Brasileiro de Sistemas",
    description: "Goiânia, 2024.",
    link: "#"
  },
  {
    id: 6,
    category: "Trabalhos Completos em Congressos",
    title: "Exploitation of Vulnerabilities in Language Models: An Analysis of Prompt Injection Attacks",
    authors: "MARIANO, K. D. P.",
    year: 2024,
    venue: "Anais do 19° Congresso Brasileiro de Sistemas",
    description: "Goiânia, 2024.",
    link: "#"
  },

  // Resumos em Anais
  {
    id: 7,
    category: "Resumos em Anais de Congressos",
    title: "Evolutionary Analysis of Kisspeptin Proteins via Multiple Sequence Alignment and PAM250 Matrix",
    authors: "MARIANO, K. D. P.",
    year: 2025,
    venue: "II Encontro Regional de Biotecnologia e Engenharia de Bioprocessos",
    description: "Belém, 2025.",
    link: "#"
  },
  {
    id: 8,
    category: "Resumos em Anais de Congressos",
    title: "Uso de Contraceptivo Orais e Risco de Progressão do Câncer de Ovário em Portador da Mutação BRCA",
    authors: "MARIANO, K. D. P.; LOPES, E. S. ; OLIVEIRA, N. B. ; FREITAS, K. S. P.",
    year: 2025,
    venue: "22° Seminário de Patologia Tropical e Saúde Pública (Revista de Patologia Tropical)",
    description: "Vol. 54, p. 143-143. Goiânia.",
    link: "#"
  },
  {
    id: 9,
    category: "Resumos em Anais de Congressos",
    title: "Classificação de Plantas em Estufas IOT e Tradicionais Usando Análise Multivariada de Parâmetros Fisiológicos",
    authors: "MARIANO, K. D. P.; SANTOS, A. C. V. ; RODRIGUES, B. L. S. ; TRINDADE, E. A. ; SANTOS, E. F. ; MENDES, G. C.",
    year: 2025,
    venue: "22° Seminário de Patologia Tropical e Saúde Pública (Revista de Patologia Tropical)",
    description: "Vol. 54, p. 14-14. Goiânia.",
    link: "#"
  },
  {
    id: 10,
    category: "Resumos em Anais de Congressos",
    title: "Modelagem Preditiva Para Redução de Biópsias no Diagnóstico de Doenças Eritemato-Descamativas",
    authors: "MARIANO, K. D. P.; LOPES, E. S. ; OLIVEIRA, N. B. ; FREITAS, K. S. P.",
    year: 2025,
    venue: "22° Seminário de Patologia Tropical e Saúde Pública (Revista de Patologia Tropical)",
    description: "Vol. 54, p. 28-28. Goiânia.",
    link: "#"
  },
  {
    id: 11,
    category: "Resumos em Anais de Congressos",
    title: "Mortalidade Materna como Indicador da Mortalidade Iinfantil em Análise Epidemiológica Global",
    authors: "MARIANO, K. D. P.; LOPES, E. S. ; OLIVEIRA, N. B. ; FREITAS, K. S. P. ; EGITO, S. M.",
    year: 2025,
    venue: "22° Seminário de Patologia Tropical e Saúde Pública (Revista de Patologia Tropical)",
    description: "Vol. 54, p. 35-35. Goiânia.",
    link: "#"
  },

  // Outras produções
  {
    id: 19,
    category: "Outras Produções Bibliográficas",
    title: "Ataques Adversários em Modelos de Linguagem: Análise de Técnicas Ofensivas na Exploração de Respostas Enviesadas em LLMs",
    authors: "MARIANO, K. D. P.",
    year: 2024,
    venue: "Universidade Federal de Goiás",
    description: "Trabalho de conclusão de curso (TCC).",
    link: "#"
  }
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Instagram", url: "https://instagram.com", icon: Instagram },
];