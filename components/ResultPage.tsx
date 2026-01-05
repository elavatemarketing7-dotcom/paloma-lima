
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants.ts';

interface ResultPageProps {
  onAction: (action: 'send' | 'continue' | 'whatsapp') => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onAction }) => {
  return (
    <div className="fixed inset-0 z-[120] bg-[#f4f1ee] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-500">
      <div className="bg-white/95 backdrop-blur-md py-3 px-5 flex items-center justify-between shadow-sm border-b border-black/5 shrink-0">
        <img 
          src={IMAGES.logo} 
          alt="Logo PL" 
          className="h-6 w-auto grayscale brightness-0" 
        />
        <div className="px-3 py-1 bg-[#a38c6d]/10 rounded-full border border-[#a38c6d]/20">
          <p className="text-[#a38c6d] font-bold text-[7px] uppercase tracking-widest">Compatível</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-5 text-center space-y-5 max-w-sm mx-auto overflow-y-auto no-scrollbar">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#2a2622]">
            Você é a <span className="text-[#a38c6d]">Paciente Ideal.</span>
          </h1>
          <p className="text-[#3d3935]/60 text-[11px] font-light leading-snug">
            O Método da Dra. {EXPERT_DATA.name} entrega a naturalidade que você procura.
          </p>
        </div>

        <div className="relative shrink-0">
          <div className="relative w-32 h-44 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-1">
            <img 
              src={IMAGES.authority1} 
              alt="Dra Paloma Lima"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full space-y-2 pb-2">
          <button 
            onClick={() => onAction('send')}
            className="w-full bg-[#a38c6d] text-white py-4 rounded-xl font-bold text-[10px] shadow-lg active:scale-95 btn-pulse uppercase tracking-[0.2em]"
          >
            1. Enviar avaliação para a Dra
          </button>
          
          <button 
            onClick={() => onAction('whatsapp')}
            className="w-full bg-[#2a2622] text-white py-4 rounded-xl font-bold text-[10px] shadow-md active:scale-95 uppercase tracking-[0.2em]"
          >
            2. Falar com equipe WhatsApp
          </button>

          <button 
            onClick={() => onAction('continue')}
            className="w-full text-[#3d3935]/40 py-2 font-bold text-[8px] uppercase tracking-widest"
          >
            3. Continuar lendo site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
