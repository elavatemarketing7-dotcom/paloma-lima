
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface InitialOverlayProps {
  onStartQuiz: () => void;
  onSkip: () => void;
}

const InitialOverlay: React.FC<InitialOverlayProps> = ({ onStartQuiz, onSkip }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#f4f1ee] flex flex-col items-center justify-center p-5 text-center overflow-hidden">
      <div className="max-w-xs w-full space-y-6 flex flex-col items-center">
        <div className="p-3 bg-white/60 rounded-xl border border-black/5">
          <img 
            src={IMAGES.logo} 
            alt="Logo" 
            className="h-8 md:h-12 w-auto grayscale brightness-0 opacity-80" 
          />
        </div>
        
        <div className="space-y-1">
          <p className="text-[8px] uppercase tracking-[0.4em] text-[#2a2622] font-bold">Harmonização Facial</p>
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#2a2622]">Dra. Paloma Lima</h1>
          <p className="text-[10px] text-[#9e896a] italic font-medium tracking-wide">Ceará • Especialista em Naturalidade</p>
        </div>

        <div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src={IMAGES.quizExpert} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full space-y-3">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-[#9e896a] text-white py-4 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 tracking-widest"
          >
            AVALIAÇÃO PREMIUM →
          </button>
          
          <button 
            onClick={onSkip}
            className="text-[#3d3935]/40 py-2 font-medium text-[8px] uppercase tracking-[0.3em] hover:text-[#9e896a]"
          >
            Pular para o site
          </button>
        </div>
      </div>
      
      <p className="absolute bottom-6 text-[7px] text-[#3d3935]/20 uppercase tracking-[0.2em] font-medium">
        Arte • Ciência • Exclusividade
      </p>
    </div>
  );
};

export default InitialOverlay;
