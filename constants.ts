import { Project, Experience, SkillCategory, SocialLink } from './types';

export const PROFILE = {
  name: "OUSSEI Adilou",
  role: "Développeur Full Stack",
  headline: "Je conçois des expériences numériques robustes et esthétiques.",
  about: "Développeur full-stack en formation avancée, je conçois et réalise des applications web complètes en maîtrisant aussi bien l’architecture back-end que l’intégration front-end. Grâce à ma formation modulaire orientée pratique, j’ai acquis de solides compétences en programmation et en conception d’interfaces modernes. Passionné par le développement, j’améliore continuellement mes outils et mes méthodes afin de livrer des solutions fiables, performantes et adaptées aux besoins réels des utilisateurs.",
  location: "Lomé, Togo",
  availability: "Disponible pour freelance"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "TypeScript", "React", "React Native", "Bootstrap"]
  },
  {
    name: "Backend",
    skills: ["PHP", "Symfony", "Python", "Django"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Git / GitHub GitLab","Figma", "WordPress", "Docker" ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Développeur Full Stack",
    company: "MyHospital",
    period: "Mai 2024 - Mai 2025",
    description: "Conception et réalisation d'une application Web et Mobile pour MyHospital. Une application de gestion d'urgence médicale. Plusieurs fonctionnalités ont été implémentés comme la gestion des pharmacies de garde, la gestion des hôpitaux, les prises de rendez-vous, des consultations en lien, la téléexpertise entre docteur et autre."
  },
  {
    id: 2,
    role: "Développeur Full Stack",
    company: "Frensh Cercle",
    period: "2025 - 2026",
    description: "Développement d'une application web pour la gestion des cours de français en ligne"
  },
  {
    id: 3,
    role: "Développeur Full Stack",
    company: "ONG Zonal",
    period: "Juin 2026 - présent",
    description: "Conception et réalisation d'une application web pour la gestion des activité et la visibilité de l'ONG"
  },
  {
    id: 4,
    role: "Développeur Full Stack",
    company: "SmrathPhone House",
    period: "Juin 2026 - présent",
    description: "Conception et réalisation d'une application E-commerce"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Frensh Cercle",
    description: "Application web de gestion des cours de français en ligne",
    tech: ["PHP", "Laravel", "Boostrap", "Stripe"],
    imageUrl: "/public/images/frenshCercle.png",
    // github: "#",
    link: "https://frenchcercle.com/"
  },
  {
    id: 2,
    title: "ONG Zonal",
    description: "Application web de gestion des activité et la visibilité de l'ONG Zonal",
    tech: ["React", "Symfony", "Tailwind"],
    imageUrl: "/public/images/zonal.png",
    // github: "#",
    link: "#"
  },
  {
    id: 3,
    title: "Task Master",
    description: "Outil de gestion de projet collaboratif avec fonctionnalités de glisser-déposer et chat en temps réel.",
    tech: ["Vue.js", "Firebase", "Pinia"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    // github: "#",
    link: "#"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "www.linkedin.com/in/adilou-oussei", icon: "linkedin" },
  { name: "Email", url: "mailto:adilououssei@gmail.com", icon: "mail" }
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