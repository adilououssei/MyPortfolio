import React from 'react';
import { PROFILE } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              {PROFILE.availability}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Salut, je suis <span className="text-primary">OUSSEI Adilou
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-6">
              {PROFILE.role}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE.headline} {PROFILE.about}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-sky-600 transition-all shadow-lg hover:shadow-primary/25"
            >
              Voir mes projets <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="Mon_CV.pdf"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 bg-transparent hover:bg-slate-800 transition-all"
            >
              Télécharger CV <Download className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <img
              src="image2.jpg"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;