
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface InitialOverlayProps {
  onStartQuiz: () => void;
  onSkip: () => void;
}

const InitialOverlay: React.FC<InitialOverlayProps> = ({ onStartQuiz, onSkip }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#f4f1ee] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700 overflow-hidden">
      <div className="max-w-md w-full space-y-6 md:space-y-10">
        <div className="flex justify-center mb-2">
          <div className="p-4 bg-white/60 rounded-[1.5rem] md:rounded-[2rem] border border-black/5 shadow-sm">
            <img 
              src={IMAGES.logo} 
              alt="Logo Dra. Paloma Lima" 
              className="h-12 md:h-20 w-auto grayscale brightness-0 opacity-90" 
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.5em] text-[#2a2622] font-bold">
            HARMONIZAÇÃO FACIAL
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2a2622] leading-tight">Dra. Paloma Lima</h1>
          <p className="text-[11px] md:text-sm text-[#9e896a] italic font-medium tracking-wide">Especialista em Naturalidade • Ceará</p>
        </div>

        {/* Foto Principal do Início (Headshot Premium) */}
        <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img 
            src={IMAGES.quizExpert} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-3 pt-4">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-[#9e896a] text-white py-4 rounded-full font-bold text-base md:text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 group tracking-wide"
          >
            Iniciar Avaliação Premium
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={onSkip}
            className="w-full text-[#3d3935]/30 py-2 rounded-full font-medium text-[9px] uppercase tracking-widest hover:text-[#9e896a] transition-colors"
          >
            Ir para o site direto
          </button>
        </div>
      </div>
      
      <p className="absolute bottom-6 text-[7px] text-[#3d3935]/20 uppercase tracking-[0.3em] font-medium">
        Ciência • Arte • Resultados Exclusivos
      </p>
    </div>
  );
};

export default InitialOverlay;
