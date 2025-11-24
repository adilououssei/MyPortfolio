import { Project, Experience, SkillCategory, SocialLink } from './types';

export const PROFILE = {
  name: "Alexandre Dupont",
  role: "Développeur Full Stack Senior",
  headline: "Je conçois des expériences numériques robustes et esthétiques.",
  about: "Passionné par le développement web depuis plus de 5 ans, je maîtrise l'ensemble de la stack technique, du serveur à l'interface utilisateur. Mon objectif est de créer des solutions performantes, évolutives et centrées sur l'utilisateur. J'aime résoudre des problèmes complexes avec du code propre et bien architecturé.",
  location: "Paris, France",
  availability: "Disponible pour freelance"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Three.js"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "Redis"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Jest", "Figma"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Lead Développeur Full Stack",
    company: "TechSolutions Inc.",
    period: "2022 - Présent",
    description: "Direction d'une équipe de 5 développeurs. Conception de l'architecture micro-services et migration du legacy code vers React/Node.js. Amélioration des performances de 40%."
  },
  {
    id: 2,
    role: "Développeur React Senior",
    company: "Creative Web Agency",
    period: "2020 - 2022",
    description: "Développement d'interfaces complexes pour des clients e-commerce. Implémentation de Design Systems et intégration d'API tierces (Stripe, Mapbox)."
  },
  {
    id: 3,
    role: "Développeur Junior",
    company: "StartupFlow",
    period: "2018 - 2020",
    description: "Maintenance de l'application principale. Développement de nouvelles fonctionnalités en Python et JavaScript."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Une application de gestion complète pour les commerçants, incluant des graphiques de ventes en temps réel et gestion des stocks.",
    tech: ["React", "TypeScript", "Recharts", "Node.js"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    github: "#",
    link: "#"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Plateforme SaaS permettant de générer des articles de blog optimisés SEO via l'API Gemini.",
    tech: ["Next.js", "Gemini API", "Tailwind", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    github: "#",
    link: "#"
  },
  {
    id: 3,
    title: "Task Master",
    description: "Outil de gestion de projet collaboratif avec fonctionnalités de glisser-déposer et chat en temps réel.",
    tech: ["Vue.js", "Firebase", "Pinia"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    github: "#",
    link: "#"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", url: "mailto:alex@example.com", icon: "mail" }
];

// System prompt for the Gemini AI assistant
export const AI_SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel IA du portfolio de ${PROFILE.name}.
Ton but est de répondre aux questions des recruteurs ou visiteurs à propos de l'expérience, des compétences et des projets de ${PROFILE.name}.

Utilise les informations suivantes comme contexte (Vérité terrain) :
Nom: ${PROFILE.name}
Role: ${PROFILE.role}
Bio: ${PROFILE.about}
Compétences: ${JSON.stringify(SKILLS)}
Expérience: ${JSON.stringify(EXPERIENCE)}
Projets: ${JSON.stringify(PROJECTS)}

Règles :
1. Sois professionnel, courtois et concis.
2. Si on te pose une question hors sujet (ex: "Quelle est la capitale du Pérou"), réponds poliment que tu es là uniquement pour parler du profil de ${PROFILE.name}.
3. Mets en valeur les points forts de ${PROFILE.name}.
4. Parle à la première personne du singulier ("Je") en tant qu'assistant de ${PROFILE.name}, ou à la troisième personne ("Alexandre a travaillé...").
`;