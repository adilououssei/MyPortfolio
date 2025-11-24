import React from 'react';
import { SOCIALS, PROFILE } from '../constants';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-6 h-6" />;
      case 'linkedin': return <Linkedin className="w-6 h-6" />;
      case 'twitter': return <Twitter className="w-6 h-6" />;
      case 'mail': return <Mail className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <footer id="contact" className="bg-darker pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Travaillons ensemble</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Je suis actuellement disponible pour de nouveaux projets. Que vous ayez une question ou juste envie de dire bonjour, je ferai de mon mieux pour vous répondre !
            </p>
            <a 
              href={`mailto:contact@example.com`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-darker bg-white hover:bg-slate-200 rounded-lg transition-colors"
            >
              Me contacter
            </a>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
            <h3 className="text-lg font-semibold text-white mb-6">Mes Réseaux</h3>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">
            Conçu avec React, Tailwind & Gemini AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;