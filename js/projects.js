const projects = [
  {
    id: 1,
    number: "01",
    name: "ColorMobile ERP",
    description:
      "ERP full stack em produção, feito para o mundo real: equipa a trabalhar em simultâneo, processos a acontecer ao mesmo tempo e zero espaço para “depois logo se vê”.",
    tags: [
      "Next.js",
      "React",
      "Socket.IO",
      "MongoDB",
      "Node.js",
      "PM2",
      "Nginx",
      "GitHub Actions",
    ],
    slug: "colormobile-erp",
    category: "ERP · Full Stack · Real-time",
    overviewTitle: "Um ERP que cresceu sem perder o controlo",
    featured: true,
    status: "production",
    role: "Engenheiro Full Stack",
    team: ["Pedro", "Higor"],
    deploy: "VPS · CI/CD com Rollback Automático",
    users: "~3.000 simultâneos",
    usersLabel: "Utilizadores Simultâneos",
    github: "restrito",
    link: "restrito",
    images: {
      hero: "/assets/images/projects/colormobile/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/colormobile/clientes.jpg",
          caption: "Gestão de Clientes",
        },
        {
          src: "/assets/images/projects/colormobile/producao.jpg",
          caption: "Módulo de Produção",
        },
        {
          src: "/assets/images/projects/colormobile/auditoria.jpg",
          caption: "Logs de Auditoria",
        },
      ],
    },
    overview: [
      "O ColorMobile ERP começou com uma necessidade bem simples: parar de gerir operação no improviso. O desafio é que “um ERP” raramente é só um CRUD — é fluxo, responsabilidade, gente a depender do sistema para trabalhar e decisões a acontecer em tempo real.",
      "Hoje está em produção com cerca de ~3.000 utilizadores simultâneos. Isso muda completamente a régua: o que em ambiente pequeno é “aceitável”, aqui vira problema rápido. Performance, segurança e previsibilidade deixam de ser tema de conversa e passam a ser requisito diário.",
      "A aplicação cobre o ciclo completo de operação: gestão de utilizadores, permissões por role, autenticação, importação/exportação via CSV em batch e eventos em tempo real com Socket.IO. O foco foi sempre o mesmo: manter o sistema estável, claro de manter e fácil de operar — mesmo quando a carga sobe e as prioridades apertam.",
      "Teve um momento que marcou a maturidade do projecto: um incidente de segurança com VPS comprometida por malware de mineração. Em vez de remendar, a decisão foi reconstruir a base: hardening, monitorização e um processo de resposta a incidentes. Produção não perdoa; ou você cria disciplina, ou a realidade cria por si.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Zustand",
      "Socket.IO",
      "MongoDB",
      "Node.js",
      "PM2",
      "Nginx",
      "GitHub Actions",
    ],
    archTitle: "Arquitectura que serve a operação (não o ego)",
    archText: [
      "O sistema vive num modelo full stack unificado em Next.js 15 (App Router + Server Components). A vantagem não é “estar na moda” — é reduzir atrito: menos camadas desnecessárias, mais previsibilidade, e performance onde realmente importa.",
      "Para estado global, Zustand foi a escolha porque mantém o modelo mental limpo. Numa aplicação grande, o melhor state management é o que a equipa consegue manter sem dor e sem transformar cada alteração numa discussão infinita.",
      "Socket.IO entrou como peça central para eventos em tempo real: notificações, mudanças de estado e sincronização entre utilizadores. O ganho prático é simples: menos polling, menos ruído, mais sensação de sistema vivo — especialmente quando tens milhares de ligações activas.",
    ],
    archLayers: [
      {
        label: "Frontend",
        type: "frontend",
        items: ["Next.js 15", "React 19", "App Router", "Server Components"],
      },
      {
        label: "State Management",
        type: "state",
        items: ["Zustand", "React Query", "Context API"],
      },
      {
        label: "Real-time",
        type: "realtime",
        items: ["Socket.IO", "WebSockets", "Eventos"],
      },
      {
        label: "Backend / API",
        type: "backend",
        items: ["Node.js", "API Routes", "Auth JWT"],
      },
      {
        label: "Database",
        type: "database",
        items: ["MongoDB", "Mongoose", "Índices"],
      },
      {
        label: "Infraestrutura",
        type: "infra",
        items: ["VPS", "PM2", "Nginx", "GitHub Actions", "Rollback"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Servidor comprometido por malware",
        desc: "Uma VPS infectada derrubava performance e colocava a operação em risco. Foi aquele tipo de situação que te obriga a parar e repensar base, não só apagar incêndio.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Rebuild com hardening e processo",
        desc: "Reconstrução completa com segurança em camadas: firewall, SSH por chave, práticas de hardening, monitorização e um fluxo de resposta a incidentes bem definido.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>`,
        title: "Deploy manual e sem rede de segurança",
        desc: "Quando o deploy é artesanal, qualquer regressão vira indisponibilidade — e a equipa perde tempo a correr atrás do próprio rasto em vez de evoluir produto.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "CI/CD com rollback automático",
        desc: "Pipeline com GitHub Actions: validações, build, deploy com PM2 e rollback automático se algo falhar. O objectivo é simples: entregar rápido sem apostar a estabilidade.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11h8"/><path d="M7 16h12"/><path d="M7 6h3"/></svg>`,
        title: "Importação em massa sem partir a experiência",
        desc: "Importar milhares de registos via CSV parece simples… até começar a travar UI, aparecer duplicidade e alguém confiar em dados errados. A solução tinha de ser robusta e transparente.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
        title: "Batch com validação e deduplicação",
        desc: "Parsing em streaming, validação linha a linha, deduplicação e operações bulk no MongoDB. Resultado: volume alto sem “puxões” na UX e sem comprometer integridade.",
      },
    ],
    metrics: [
      {
        value: "~3K",
        unit: "",
        label: "Utilizadores Simultâneos",
        sub: "em produção activa",
        color: "var(--gold)",
      },
      {
        value: "99",
        unit: "%",
        label: "Uptime Alvo",
        sub: "após hardening",
        color: "var(--violet-light)",
      },
      {
        value: "<3",
        unit: "min",
        label: "Tempo de Deploy",
        sub: "do push ao ar",
        color: "#27ae60",
      },
      {
        value: "0",
        unit: "",
        label: "Deploys sem Rollback",
        sub: "sempre reversível",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 2", slug: "projeto-2" },
  },
  {
    id: 2,
    number: "02",
    name: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sistema em desenvolvimento com arquitetura moderna e foco em escalabilidade.",
    tags: ["React", "Node.js", "MongoDB"],
    slug: "projeto-2",
    category: "Full Stack · React · Node.js",
    overviewTitle: "Lorem ipsum construído para escalar",
    featured: true,
    status: "development",
    role: "Desenvolvedor Full Stack",
    team: ["Lorem", "Ipsum"],
    deploy: "Lorem ipsum · Deploy Automático",
    users: "~500 ativos",
    usersLabel: "Utilizadores Ativos",
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-2/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-2/screen1.jpg",
          caption: "Módulo Principal",
        },
        {
          src: "/assets/images/projects/projeto-2/screen2.jpg",
          caption: "Dashboard",
        },
        {
          src: "/assets/images/projects/projeto-2/screen3.jpg",
          caption: "Relatórios",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    archTitle: "Arquitetura orientada a módulos",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    archLayers: [
      {
        label: "Frontend",
        type: "frontend",
        items: ["React", "Context API", "CSS Modules"],
      },
      {
        label: "Backend / API",
        type: "backend",
        items: ["Node.js", "Express", "Auth JWT"],
      },
      {
        label: "Database",
        type: "database",
        items: ["MongoDB", "Mongoose", "Índices"],
      },
      {
        label: "Infraestrutura",
        type: "infra",
        items: ["VPS", "PM2", "Nginx"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum problema crítico",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum solução implementada",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>`,
        title: "Lorem ipsum segundo desafio",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "Lorem ipsum resolução eficiente",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
      },
    ],
    metrics: [
      {
        value: "500",
        unit: "+",
        label: "Utilizadores",
        sub: "em crescimento",
        color: "var(--gold)",
      },
      {
        value: "98",
        unit: "%",
        label: "Disponibilidade",
        sub: "uptime medido",
        color: "var(--violet-light)",
      },
      {
        value: "1.2",
        unit: "s",
        label: "Tempo de Resposta",
        sub: "média das APIs",
        color: "#27ae60",
      },
      {
        value: "12",
        unit: "",
        label: "Módulos",
        sub: "independentes",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 3", slug: "projeto-3" },
  },
  {
    id: 3,
    number: "03",
    name: "Projeto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plataforma construída com foco em performance e experiência do utilizador.",
    tags: ["Python", "Django", "PostgreSQL"],
    slug: "projeto-3",
    category: "Full Stack · Python · Cloud",
    overviewTitle: "Lorem ipsum feito para crescer",
    featured: true,
    status: "development",
    role: "Desenvolvedor Full Stack",
    team: ["Lorem"],
    deploy: "AWS · Containerizado com Docker",
    users: "~200 diários",
    usersLabel: "Utilizadores Diários",
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-3/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-3/screen1.jpg",
          caption: "Painel Principal",
        },
        {
          src: "/assets/images/projects/projeto-3/screen2.jpg",
          caption: "Gestão de Dados",
        },
        {
          src: "/assets/images/projects/projeto-3/screen3.jpg",
          caption: "Análise de Resultados",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    ],
    stack: ["Python 3.11", "Django", "PostgreSQL", "Docker", "AWS"],
    archTitle: "Plataforma construída para crescer",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A arquitetura segue o padrão MVC com separação clara de responsabilidades.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    archLayers: [
      {
        label: "Frontend",
        type: "frontend",
        items: ["Django Templates", "HTMX", "Alpine.js"],
      },
      {
        label: "Backend",
        type: "backend",
        items: ["Django", "Django REST", "Celery"],
      },
      {
        label: "Database",
        type: "database",
        items: ["PostgreSQL", "Redis", "Migrations"],
      },
      {
        label: "Infraestrutura",
        type: "infra",
        items: ["AWS EC2", "Docker", "RDS", "S3"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum problema de performance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum caching estratégico",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>`,
        title: "Lorem ipsum integrações complexas",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "Lorem ipsum camada de abstração",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
      },
    ],
    metrics: [
      {
        value: "200",
        unit: "+",
        label: "Utilizadores Diários",
        sub: "crescimento constante",
        color: "var(--gold)",
      },
      {
        value: "99.5",
        unit: "%",
        label: "Uptime",
        sub: "infraestrutura AWS",
        color: "var(--violet-light)",
      },
      {
        value: "0.8",
        unit: "s",
        label: "Tempo de Carga",
        sub: "com cache ativo",
        color: "#27ae60",
      },
      {
        value: "8",
        unit: "",
        label: "Integrações",
        sub: "APIs externas",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Portfolio Pessoal", slug: "portfolio-pessoal" },
  },
  {
    id: 4,
    number: "04",
    name: "Portfolio Pessoal",
    description:
      "SPA feita à mão com HTML, CSS e JavaScript puro. Um projecto intencional: controlo total do front-end e atenção real aos detalhes.",
    tags: ["HTML5", "CSS3", "JavaScript", "BEM", "SPA", "Netlify"],
    slug: "portfolio-pessoal",
    category: "Frontend · SPA · Vanilla JS",
    overviewTitle: "Um portfólio que prova base, não só estética",
    featured: true,
    status: "production",
    role: "Desenvolvedor Frontend",
    team: [],
    deploy: "Netlify · Deploy Automático via GitHub",
    users: "Visitantes",
    usersLabel: "Público",
    github: "https://github.com/donhigorini/don-portfolio",
    link: "https://donhigorini.netlify.app",
    images: {
      hero: "/assets/images/projects/portfolio/hero.jpg",
      screenshots: [
        { src: "/assets/images/projects/portfolio/home.jpg", caption: "Home" },
        {
          src: "/assets/images/projects/portfolio/projetos.jpg",
          caption: "Página de Projectos",
        },
        {
          src: "/assets/images/projects/portfolio/detalhe.jpg",
          caption: "Detalhe do Projecto",
        },
      ],
    },
    overview: [
      "Este portfólio não foi feito para ser só bonito — foi feito para mostrar base. A escolha de construir tudo em HTML, CSS e JavaScript puro foi intencional: eu queria controlo total e queria que cada detalhe existisse porque eu o desenhei, não porque uma biblioteca o decidiu por mim.",
      "A maior dor (e, honestamente, a parte mais divertida) foi criar a navegação estilo SPA sem router. Tive de montar as rotas com History API, tratar o botão voltar do browser, gerir scroll restoration por view e suportar navegação por hash — tudo sem flash de conteúdo e sem “efeitos colaterais” estranhos.",
      "A camada visual veio depois com uma regra clara: efeito só entra se não estragar performance. Cursor customizado, efeitos em canvas, animações por scroll e transições suaves — sempre com cuidado em mobile e com o site a pausar o que precisa quando o separador fica em background.",
      "O resultado é um portfólio com identidade própria, responsivo e leve. Para quem não é da área, ele comunica clareza e cuidado. Para quem é, ele mostra exactamente onde eu gosto de operar: fundamentos bem feitos e execução limpa.",
    ],
    stack: [
      "HTML5",
      "CSS3 · BEM",
      "JavaScript ES6+",
      "History API",
      "IntersectionObserver",
      "Canvas API",
      "Netlify",
    ],
    archTitle: "Fundamentos bem usados, sem depender de muletas",
    archText: [
      "SPA sem framework: rotas e histórico com History API, renderização dinâmica por view e gestão explícita de estados de navegação.",
      "Animações com disciplina: requestAnimationFrame para suavidade, canvas com limite de FPS e pausas automáticas via visibilitychange quando o separador perde foco.",
      "Responsividade pragmática: breakpoints por componente, tipografia fluida com clamp() e ajustes pensados para dispositivos com comportamento fora do “normal”.",
    ],
    archLayers: [
      {
        label: "Fundação",
        type: "frontend",
        items: ["HTML5 Semântico", "CSS3 · BEM", "Design Tokens"],
      },
      {
        label: "Navegação SPA",
        type: "state",
        items: ["History API", "Router Vanilla", "Scroll Restore"],
      },
      {
        label: "Animações",
        type: "realtime",
        items: ["Canvas API", "requestAnimationFrame", "IntersectionObserver"],
      },
      {
        label: "Deploy",
        type: "infra",
        items: ["Netlify", "GitHub", "CI/CD Automático", "_redirects"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "SPA sem router pronto",
        desc: "Rotas, histórico, scroll restoration e navegação por hash em JavaScript puro. Sem abstrações — cada edge case tinha de ser resolvido na unha.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Router vanilla com History API",
        desc: "pushState/popstate, render por rota, scroll por view e âncoras com comportamento consistente — navegação limpa e previsível.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
        title: "Efeitos visuais sem sacrificar fluidez",
        desc: "Cursor customizado, canvas no background e animações por scroll — tudo a correr junto sem “engasgar”, mesmo em dispositivos menos potentes.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
        title: "Performance como regra",
        desc: "Throttle no canvas, pause/resume via visibilitychange, protecção para touch devices e debounce no resize. Efeito entra só se a experiência continuar leve.",
      },
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="M21 10H3"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg>`,
        title: "Responsividade em ecrãs exigentes",
        desc: "Dobráveis, ecrãs pequenos e variações de viewport/pointer mudam o layout. Aqui, cada breakpoint teve de ser tratado com precisão.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>`,
        title: "Breakpoints por componente",
        desc: "Media queries organizadas por bloco, com sobreposições pontuais e tipografia fluida com clamp() para manter consistência sem reescrever CSS base.",
      },
    ],
    metrics: [
      {
        value: "0",
        unit: "",
        label: "Dependências de Framework",
        sub: "HTML, CSS e JS puro",
        color: "var(--gold)",
      },
      {
        value: "3",
        unit: "",
        label: "Breakpoints",
        sub: "480 · 768 · 1024px",
        color: "var(--violet-light)",
      },
      {
        value: "100",
        unit: "%",
        label: "Vanilla JavaScript",
        sub: "sem transpilador",
        color: "#27ae60",
      },
      {
        value: "1",
        unit: "",
        label: "Ficheiro HTML",
        sub: "SPA completa",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 5", slug: "projeto-5" },
  },
  {
    id: 5,
    number: "05",
    name: "Projeto 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. API robusta construída com foco em segurança e documentação clara.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    slug: "projeto-5",
    category: "Full Stack · TypeScript · Next.js",
    overviewTitle: "Lorem ipsum com tipos que não mentem",
    featured: false,
    status: "development",
    role: "Desenvolvedor Full Stack",
    team: ["Lorem", "Ipsum"],
    deploy: "Vercel · Preview por Branch",
    users: "~150 beta",
    usersLabel: "Utilizadores Beta",
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-5/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-5/screen1.jpg",
          caption: "Interface Principal",
        },
        {
          src: "/assets/images/projects/projeto-5/screen2.jpg",
          caption: "Configurações",
        },
        {
          src: "/assets/images/projects/projeto-5/screen3.jpg",
          caption: "Analytics",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    archTitle: "Type-safe do banco à interface",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arquitetura orientada a types com inferência end-to-end.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    archLayers: [
      {
        label: "Frontend",
        type: "frontend",
        items: ["Next.js 14", "React", "Tailwind CSS"],
      },
      { label: "Tipagem", type: "state", items: ["TypeScript", "Zod", "tRPC"] },
      {
        label: "Database",
        type: "database",
        items: ["PostgreSQL", "Prisma", "Migrations"],
      },
      {
        label: "Deploy",
        type: "infra",
        items: ["Vercel", "GitHub Actions", "Preview Envs"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum problema de tipagem",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum inferência end-to-end",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
    ],
    metrics: [
      {
        value: "150",
        unit: "+",
        label: "Beta Testers",
        sub: "feedback ativo",
        color: "var(--gold)",
      },
      {
        value: "0",
        unit: "",
        label: "Erros de Tipo",
        sub: "em produção",
        color: "var(--violet-light)",
      },
      {
        value: "4",
        unit: "",
        label: "Ambientes",
        sub: "preview por branch",
        color: "#27ae60",
      },
      {
        value: "100",
        unit: "%",
        label: "Type Coverage",
        sub: "TypeScript strict",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 6", slug: "projeto-6" },
  },
  {
    id: 6,
    number: "06",
    name: "Projeto 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Serviço de autenticação centralizado com suporte a múltiplos providers.",
    tags: ["Node.js", "Express", "JWT"],
    slug: "projeto-6",
    category: "Backend · Autenticação · Segurança",
    overviewTitle: "Lorem ipsum autenticação como fundação",
    featured: false,
    status: "development",
    role: "Desenvolvedor Backend",
    team: [],
    deploy: "VPS · PM2 + Nginx",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-6/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-6/screen1.jpg",
          caption: "Fluxo de Auth",
        },
        {
          src: "/assets/images/projects/projeto-6/screen2.jpg",
          caption: "Gestão de Tokens",
        },
        {
          src: "/assets/images/projects/projeto-6/screen3.jpg",
          caption: "Logs de Acesso",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    ],
    stack: ["Node.js", "Express", "JWT", "Redis", "PostgreSQL"],
    archTitle: "Auth como serviço independente",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Serviço de autenticação desacoplado dos domínios de negócio.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "API",
        type: "backend",
        items: ["Node.js", "Express", "Middleware"],
      },
      {
        label: "Autenticação",
        type: "state",
        items: ["JWT", "Refresh Tokens", "OAuth2"],
      },
      {
        label: "Cache",
        type: "realtime",
        items: ["Redis", "Sessions", "Blacklist"],
      },
      {
        label: "Database",
        type: "database",
        items: ["PostgreSQL", "Usuários", "Roles"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum token invalidation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum blacklist em Redis",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
    ],
    metrics: [
      {
        value: "<50",
        unit: "ms",
        label: "Latência de Auth",
        sub: "com cache Redis",
        color: "var(--gold)",
      },
      {
        value: "5",
        unit: "",
        label: "Providers OAuth",
        sub: "suportados",
        color: "var(--violet-light)",
      },
      {
        value: "99.9",
        unit: "%",
        label: "Disponibilidade",
        sub: "uptime medido",
        color: "#27ae60",
      },
      {
        value: "0",
        unit: "",
        label: "Tokens Vazados",
        sub: "auditoria contínua",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 7", slug: "projeto-7" },
  },
  {
    id: 7,
    number: "07",
    name: "Projeto 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Schema design com foco em consistência de dados e performance de queries.",
    tags: ["MongoDB", "Mongoose", "Validation"],
    slug: "projeto-7",
    category: "Backend · MongoDB · Performance",
    overviewTitle: "Lorem ipsum dados com estrutura e intenção",
    featured: false,
    status: "development",
    role: "Desenvolvedor Backend",
    team: [],
    deploy: "Atlas · Replica Set",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-7/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-7/screen1.jpg",
          caption: "Schema Design",
        },
        {
          src: "/assets/images/projects/projeto-7/screen2.jpg",
          caption: "Índices e Queries",
        },
        {
          src: "/assets/images/projects/projeto-7/screen3.jpg",
          caption: "Monitoring",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    ],
    stack: ["MongoDB", "Mongoose", "Atlas", "Aggregation Pipeline"],
    archTitle: "Dados com intenção",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Schema design orientado aos padrões de acesso.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "Schema",
        type: "frontend",
        items: ["Mongoose", "Validação", "Virtuals"],
      },
      {
        label: "Queries",
        type: "backend",
        items: ["Aggregation", "Índices", "Explain"],
      },
      {
        label: "Infraestrutura",
        type: "infra",
        items: ["Atlas", "Replica Set", "Backups"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum queries lentas",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum índices compostos",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    metrics: [
      {
        value: "10x",
        unit: "",
        label: "Ganho em Queries",
        sub: "com índices compostos",
        color: "var(--gold)",
      },
      {
        value: "<5",
        unit: "ms",
        label: "Latência Média",
        sub: "queries otimizadas",
        color: "var(--violet-light)",
      },
      {
        value: "99",
        unit: "%",
        label: "Cobertura de Validação",
        sub: "schema Mongoose",
        color: "#27ae60",
      },
      {
        value: "3",
        unit: "",
        label: "Replica Set",
        sub: "alta disponibilidade",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 8", slug: "projeto-8" },
  },
  {
    id: 8,
    number: "08",
    name: "Projeto 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modelagem relacional com migrações versionadas e queries otimizadas.",
    tags: ["PostgreSQL", "SQL", "Migrations"],
    slug: "projeto-8",
    category: "Backend · PostgreSQL · Migrations",
    overviewTitle: "Lorem ipsum relacional e sem surpresas",
    featured: false,
    status: "development",
    role: "Desenvolvedor Backend",
    team: [],
    deploy: "RDS · AWS",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-8/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-8/screen1.jpg",
          caption: "Schema ER",
        },
        {
          src: "/assets/images/projects/projeto-8/screen2.jpg",
          caption: "Migrações",
        },
        {
          src: "/assets/images/projects/projeto-8/screen3.jpg",
          caption: "Query Plan",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modelagem relacional pensada para crescer.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    stack: ["PostgreSQL 15", "SQL", "Flyway", "pgAdmin", "AWS RDS"],
    archTitle: "Relacional com disciplina",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Migrações versionadas como parte do ciclo de desenvolvimento.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "Schema",
        type: "frontend",
        items: ["PostgreSQL", "Normalização", "Constraints"],
      },
      {
        label: "Migrações",
        type: "state",
        items: ["Flyway", "Versionamento", "Rollback"],
      },
      {
        label: "Performance",
        type: "backend",
        items: ["Índices", "EXPLAIN", "Particionamento"],
      },
      {
        label: "Infraestrutura",
        type: "infra",
        items: ["AWS RDS", "Backups", "Read Replicas"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum migrations sem downtime",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alterações de schema em produção sem bloquear operações ativas.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum expand-contract pattern",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    metrics: [
      {
        value: "0",
        unit: "",
        label: "Downtime em Migrations",
        sub: "expand-contract",
        color: "var(--gold)",
      },
      {
        value: "40",
        unit: "+",
        label: "Migrations",
        sub: "versionadas e testadas",
        color: "var(--violet-light)",
      },
      {
        value: "<10",
        unit: "ms",
        label: "P99 de Queries",
        sub: "após otimização",
        color: "#27ae60",
      },
      {
        value: "2",
        unit: "",
        label: "Read Replicas",
        sub: "para relatórios",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 9", slug: "projeto-9" },
  },
  {
    id: 9,
    number: "09",
    name: "Projeto 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Infraestrutura de servidor com gestão de processos e proxy reverso.",
    tags: ["Nginx", "PM2", "Linux"],
    slug: "projeto-9",
    category: "DevOps · Infraestrutura · Linux",
    overviewTitle: "Lorem ipsum infraestrutura que não faz barulho",
    featured: false,
    status: "development",
    role: "Engenheiro DevOps",
    team: [],
    deploy: "VPS Ubuntu · Configuração Manual",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-9/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-9/screen1.jpg",
          caption: "Configuração Nginx",
        },
        {
          src: "/assets/images/projects/projeto-9/screen2.jpg",
          caption: "PM2 Monitoring",
        },
        {
          src: "/assets/images/projects/projeto-9/screen3.jpg",
          caption: "Logs do Sistema",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Infraestrutura construída com atenção a cada camada do sistema.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    stack: ["Ubuntu 22.04", "Nginx", "PM2", "Certbot", "UFW"],
    archTitle: "Servidor configurado com intenção",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cada camada da infraestrutura com propósito claro.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "Proxy",
        type: "frontend",
        items: ["Nginx", "SSL/TLS", "Gzip", "Cache"],
      },
      {
        label: "Processos",
        type: "state",
        items: ["PM2", "Cluster Mode", "Auto-restart"],
      },
      {
        label: "Segurança",
        type: "backend",
        items: ["UFW", "Fail2ban", "SSH Keys"],
      },
      {
        label: "Sistema",
        type: "infra",
        items: ["Ubuntu 22.04", "Cron", "Logrotate"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum zero-downtime restarts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reiniciar processos sem interromper conexões ativas.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum PM2 cluster + reload",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    metrics: [
      {
        value: "0ms",
        unit: "",
        label: "Downtime em Reload",
        sub: "PM2 graceful reload",
        color: "var(--gold)",
      },
      {
        value: "A+",
        unit: "",
        label: "SSL Rating",
        sub: "Qualys SSL Labs",
        color: "var(--violet-light)",
      },
      {
        value: "99.9",
        unit: "%",
        label: "Uptime",
        sub: "30 dias consecutivos",
        color: "#27ae60",
      },
      {
        value: "3",
        unit: "",
        label: "Apps em Cluster",
        sub: "mesmo servidor",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 10", slug: "projeto-10" },
  },
  {
    id: 10,
    number: "10",
    name: "Projeto 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pipeline de integração e entrega contínua com testes automatizados.",
    tags: ["CI/CD", "GitHub Actions", "Deploy"],
    slug: "projeto-10",
    category: "DevOps · CI/CD · Automação",
    overviewTitle: "Lorem ipsum deploy sem medo",
    featured: false,
    status: "development",
    role: "Engenheiro DevOps",
    team: [],
    deploy: "GitHub Actions · Multi-environment",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-10/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-10/screen1.jpg",
          caption: "Pipeline Overview",
        },
        {
          src: "/assets/images/projects/projeto-10/screen2.jpg",
          caption: "Test Reports",
        },
        {
          src: "/assets/images/projects/projeto-10/screen3.jpg",
          caption: "Deploy History",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pipeline que torna deploy uma operação previsível e segura.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    stack: ["GitHub Actions", "Docker", "Jest", "ESLint", "SSH Deploy"],
    archTitle: "Do push ao ar com confiança",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pipeline automatizado que valida antes de entregar.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "Trigger",
        type: "frontend",
        items: ["Push", "PR", "Tag Release"],
      },
      {
        label: "Validação",
        type: "state",
        items: ["Lint", "Testes", "Build Check"],
      },
      {
        label: "Deploy",
        type: "backend",
        items: ["SSH", "PM2 Reload", "Health Check"],
      },
      {
        label: "Rollback",
        type: "infra",
        items: ["Versioning", "Auto-revert", "Alertas"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum falhas silenciosas",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deploys que pareciam ter sucesso mas falhavam silenciosamente em produção.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum health check obrigatório",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    metrics: [
      {
        value: "<3",
        unit: "min",
        label: "Tempo de Pipeline",
        sub: "do push ao ar",
        color: "var(--gold)",
      },
      {
        value: "100",
        unit: "%",
        label: "Cobertura de Testes",
        sub: "antes do deploy",
        color: "var(--violet-light)",
      },
      {
        value: "0",
        unit: "",
        label: "Deploys com Falha",
        sub: "sem rollback ativo",
        color: "#27ae60",
      },
      {
        value: "3",
        unit: "",
        label: "Ambientes",
        sub: "dev · staging · prod",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 11", slug: "projeto-11" },
  },
  {
    id: 11,
    number: "11",
    name: "Projeto 11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Design system consistente com componentes reutilizáveis e tokens bem definidos.",
    tags: ["Figma", "Design System", "UI"],
    slug: "projeto-11",
    category: "Design · UI · Design System",
    overviewTitle: "Lorem ipsum consistência como sistema",
    featured: false,
    status: "development",
    role: "Designer UI",
    team: [],
    deploy: "Figma · Storybook",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-11/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-11/screen1.jpg",
          caption: "Design Tokens",
        },
        {
          src: "/assets/images/projects/projeto-11/screen2.jpg",
          caption: "Componentes",
        },
        {
          src: "/assets/images/projects/projeto-11/screen3.jpg",
          caption: "Storybook",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Design system que fala a mesma língua do código.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    stack: ["Figma", "Storybook", "CSS Variables", "React", "Chromatic"],
    archTitle: "Consistência por design",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tokens como fonte única da verdade para cor, tipografia e espaçamento.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "Tokens",
        type: "frontend",
        items: ["Cores", "Tipografia", "Espaçamento"],
      },
      {
        label: "Componentes",
        type: "state",
        items: ["Átomos", "Moléculas", "Organismos"],
      },
      {
        label: "Documentação",
        type: "backend",
        items: ["Storybook", "MDX", "Chromatic"],
      },
      {
        label: "Integração",
        type: "infra",
        items: ["Figma Tokens", "CI Visual", "NPM Package"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum inconsistência visual",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Componentes com estilos divergentes entre Figma e código.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum single source of truth",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    metrics: [
      {
        value: "80",
        unit: "+",
        label: "Componentes",
        sub: "documentados",
        color: "var(--gold)",
      },
      {
        value: "100",
        unit: "%",
        label: "Token Coverage",
        sub: "sem valores hardcoded",
        color: "var(--violet-light)",
      },
      {
        value: "0",
        unit: "",
        label: "Regressões Visuais",
        sub: "Chromatic CI",
        color: "#27ae60",
      },
      {
        value: "3",
        unit: "",
        label: "Temas",
        sub: "light · dark · high contrast",
        color: "var(--crimson)",
      },
    ],
    nextProject: { name: "Projeto 12", slug: "projeto-12" },
  },
  {
    id: 12,
    number: "12",
    name: "Projeto 12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Camada de segurança com controle de acesso granular e proteção contra abusos.",
    tags: ["Security", "RBAC", "Rate Limiting"],
    slug: "projeto-12",
    category: "Backend · Segurança · RBAC",
    overviewTitle: "Lorem ipsum segurança em cada camada",
    featured: false,
    status: "development",
    role: "Engenheiro de Segurança",
    team: [],
    deploy: "Middleware · Edge Functions",
    users: null,
    usersLabel: null,
    github: null,
    link: null,
    images: {
      hero: "/assets/images/projects/projeto-12/hero.jpg",
      screenshots: [
        {
          src: "/assets/images/projects/projeto-12/screen1.jpg",
          caption: "RBAC Config",
        },
        {
          src: "/assets/images/projects/projeto-12/screen2.jpg",
          caption: "Rate Limit Dashboard",
        },
        {
          src: "/assets/images/projects/projeto-12/screen3.jpg",
          caption: "Audit Logs",
        },
      ],
    },
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Segurança como camada transversal, não como afterthought.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    stack: ["Node.js", "CASL", "Redis", "Express Middleware", "Winston"],
    archTitle: "Segurança em profundidade",
    archText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Múltiplas camadas de proteção independentes.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    archLayers: [
      {
        label: "Controle de Acesso",
        type: "frontend",
        items: ["RBAC", "CASL", "Permissões"],
      },
      {
        label: "Rate Limiting",
        type: "state",
        items: ["Redis Sliding Window", "IP Block", "Throttle"],
      },
      {
        label: "Auditoria",
        type: "backend",
        items: ["Winston", "Audit Logs", "Alertas"],
      },
      {
        label: "Infraestrutura",
        type: "infra",
        items: ["Edge Functions", "WAF", "HTTPS Only"],
      },
    ],
    challenges: [
      {
        type: "problem",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
        title: "Lorem ipsum permissões granulares",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Controle de acesso que crescia em complexidade sem escalar.",
      },
      {
        type: "solution",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Lorem ipsum CASL ability-based",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    metrics: [
      {
        value: "0",
        unit: "",
        label: "Acessos Não Autorizados",
        sub: "desde o deploy",
        color: "var(--gold)",
      },
      {
        value: "5",
        unit: "",
        label: "Níveis de Permissão",
        sub: "RBAC granular",
        color: "var(--violet-light)",
      },
      {
        value: "99",
        unit: "%",
        label: "Ataques Bloqueados",
        sub: "rate limiting ativo",
        color: "#27ae60",
      },
      {
        value: "100",
        unit: "%",
        label: "Auditoria",
        sub: "logs de acesso completos",
        color: "var(--crimson)",
      },
    ],
    nextProject: null,
  },
];

window.projects = projects;

function applyCursorToNewElements() {
  if (window.applyCursorHover) {
    window.applyCursorHover(document.querySelectorAll("a, button"));
  }
}

function getAllTags() {
  const tagSet = new Set();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

function projectCardHtml(project) {
  const tagsHtml = (project.tags || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  const isPrivate =
    project.github === "restrito" || project.link === "restrito";
  const hasCode = !isPrivate && !!project.github;
  const hasDemo = !isPrivate && !!project.link;
  const badgesHtml =
    isPrivate || hasCode || hasDemo
      ? `<div class="project-item__badges">
          ${isPrivate ? `<span class="project-item__badge project-item__badge--private">Privado</span>` : ""}
          ${hasCode ? `<span class="project-item__badge project-item__badge--code">Código</span>` : ""}
          ${hasDemo ? `<span class="project-item__badge project-item__badge--demo">Demo</span>` : ""}
        </div>`
      : "";

  return `
    <a href="/projetos/${project.slug}" data-link class="project-item">
      <span class="project-item__number">${project.number}</span>
      <div class="project-item__info">
        <h3 class="project-item__name">${project.name}</h3>
        <p class="project-item__description">${project.description}</p>
        <div class="project-item__tags">${tagsHtml}</div>
        ${badgesHtml}
      </div>
      <span class="project-item__arrow" aria-hidden="true">→</span>
    </a>
  `;
}

function placeholderCardHtml(number) {
  return `
    <a href="/#contact" data-link class="project-item project-item--placeholder">
      <span class="project-item__number">${number}</span>
      <div class="project-item__info">
        <h3 class="project-item__name">O Seu Projeto</h3>
        <p class="project-item__description">
          Este lugar está reservado. Vamos construir algo que vale a pena colocar aqui.
        </p>
        <div class="project-item__tags">
          <span class="tag">Em aberto</span>
          <span class="tag">Vamos conversar</span>
        </div>
      </div>
      <span class="project-item__arrow" aria-hidden="true">→</span>
    </a>
  `;
}

function emptyStateHtml(tag) {
  return `
    <div class="projects-page__empty">
      <span class="projects-page__empty-icon">◈</span>
      <p class="projects-page__empty-title">Nenhum projeto com a tag <em>${tag}</em></p>
      <p class="projects-page__empty-sub">Tenta outra categoria ou vê todos os projetos.</p>
    </div>
  `;
}

function animateCards(container, startIndex = 0) {
  const cards = container.querySelectorAll(".project-item");
  cards.forEach((card, i) => {
    if (i < startIndex) return;
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.5s ease ${(i - startIndex) * 0.07}s, transform 0.5s ease ${(i - startIndex) * 0.07}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    });
  });
}

function renderProjects() {
  const projectsList = document.getElementById("projects-list");
  if (!projectsList) return;

  projectsList.innerHTML = "";

  const featuredProjects = projects.filter((project) => project.featured);

  featuredProjects.forEach((project) => {
    projectsList.insertAdjacentHTML("beforeend", projectCardHtml(project));
  });

  applyCursorToNewElements();
}

function renderProjectsPage() {
  const container = document.getElementById("projects-page");
  if (!container) return;

  window.scrollTo(0, 0);

  const allProjects = window.projects || [];
  const INITIAL_LIMIT = 6;
  let currentLimit = INITIAL_LIMIT;
  let activeTag = null;

  const allTags = getAllTags();

  const tagsBarHtml = `
    <div class="projects-page__filters" id="tag-filters">
      <button class="projects-page__filter-tag projects-page__filter-tag--active" data-tag="all">
        Todos
      </button>
      ${allTags
        .map(
          (t) => `
        <button class="projects-page__filter-tag" data-tag="${t}">${t}</button>
      `,
        )
        .join("")}
    </div>
  `;

  function getFilteredProjects() {
    if (!activeTag) return allProjects;
    return allProjects.filter((p) => p.tags.includes(activeTag));
  }

  function getListHtml(limit) {
    const filtered = getFilteredProjects();
    const visible = filtered.slice(0, limit);
    const hasMore = filtered.length > limit;
    const nextNumber = String(allProjects.length + 1).padStart(2, "0");

    if (filtered.length === 0) {
      return emptyStateHtml(activeTag);
    }

    return `
      ${visible.map(projectCardHtml).join("")}
      ${
        hasMore
          ? `<div class="projects-page__load-more">
            <button class="btn btn--outline" id="load-more-btn">Ver mais projetos</button>
           </div>`
          : !activeTag
            ? placeholderCardHtml(nextNumber)
            : ""
      }
    `;
  }

  function updateCount() {
    const countEl = document.getElementById("projects-count");
    if (!countEl) return;
    const filtered = getFilteredProjects();
    const total = allProjects.length;
    countEl.innerHTML = activeTag
      ? `<span>${filtered.length}</span> de ${total} projetos`
      : `<span>${total}</span> projetos`;
  }

  function renderList(animate = true, startIndex = 0) {
    const list = document.getElementById("all-projects-list");
    if (!list) return;
    currentLimit = INITIAL_LIMIT;
    list.innerHTML = getListHtml(currentLimit);
    updateCount();
    if (animate) animateCards(list, startIndex);
    applyCursorToNewElements();
  }

  container.innerHTML = `
    <div class="projects-page">
      <div class="projects-page__hero">
        <div class="section-container">
          <a href="/" data-link class="projects-page__back">
            ← Voltar ao Portfolio
          </a>
          <div class="projects-page__hero-content">
            <span class="projects-page__eyebrow">O que eu entreguei</span>
            <h1 class="projects-page__title">Todos os<br/>Projetos</h1>
            <p class="projects-page__sub">Uma visão completa de sistemas, interfaces e infraestrutura — do conceito à produção.</p>
          </div>
        </div>
      </div>

      <div class="projects-page__list">
        <div class="section-container">
          ${tagsBarHtml}
          <div class="projects-page__count" id="projects-count">
            <span>${allProjects.length}</span> projetos
          </div>
          <div id="all-projects-list">
            ${getListHtml(currentLimit)}
          </div>
        </div>
      </div>
    </div>
  `;

  const list = document.getElementById("all-projects-list");
  animateCards(list, 0);
  applyCursorToNewElements();

  const filtersEl = container.querySelector("#tag-filters");
  if (filtersEl) {
    const select = document.createElement("select");
    select.className = "projects-page__filter-select";
    select.innerHTML =
      `<option value="all">Todos os projetos</option>` +
      allTags.map((t) => `<option value="${t}">${t}</option>`).join("");
    filtersEl.parentNode.insertBefore(select, filtersEl.nextSibling);

    select.addEventListener("change", () => {
      activeTag = select.value === "all" ? null : select.value;
      container
        .querySelectorAll(".projects-page__filter-tag")
        .forEach((btn) => {
          btn.classList.toggle(
            "projects-page__filter-tag--active",
            btn.dataset.tag === select.value,
          );
        });
      renderList(true, 0);
    });
  }

  container.addEventListener("click", (e) => {
    const filterBtn = e.target.closest("[data-tag]");
    if (filterBtn) {
      const tag = filterBtn.dataset.tag;
      activeTag = tag === "all" ? null : tag;

      container
        .querySelectorAll(".projects-page__filter-tag")
        .forEach((btn) => {
          btn.classList.toggle(
            "projects-page__filter-tag--active",
            btn.dataset.tag === tag,
          );
        });

      renderList(true, 0);
      return;
    }

    if (e.target.id === "load-more-btn") {
      const prevLimit = currentLimit;
      currentLimit = getFilteredProjects().length;
      const listEl = document.getElementById("all-projects-list");

      const loadMoreDiv = container.querySelector(".projects-page__load-more");
      if (loadMoreDiv) {
        loadMoreDiv.style.opacity = "0";
        loadMoreDiv.style.transition = "opacity 0.3s";
      }

      setTimeout(() => {
        listEl.innerHTML = getListHtml(currentLimit);
        animateCards(listEl, prevLimit);
        applyCursorToNewElements();
      }, 300);
    }
  });
}

window.renderProjectsPage = renderProjectsPage;

renderProjects();
