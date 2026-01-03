
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants.ts';

interface ResultPageProps {
  onAction: (action: 'send' | 'continue' | 'whatsapp') => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onAction }) => {
  return (
    <div className="fixed inset-0 z-[120] bg-[#f4f1ee] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-500">
      <div className="bg-white/90 backdrop-blur-md py-3 px-6 flex items-center justify-between shadow-sm border-b border-black/5 shrink-0">
        <img 
          src={IMAGES.logo} 
          alt="Logo PL" 
          className="h-7 w-auto grayscale brightness-0" 
        />
        <div className="px-3 py-1 bg-[#a38c6d]/10 rounded-full border border-[#a38c6d]/20">
          <p className="text-[#a38c6d] font-bold text-[8px] uppercase tracking-[0.2em]">
            Perfil Compatível
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center space-y-4 max-w-lg mx-auto overflow-y-auto no-scrollbar">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#2a2622] leading-tight">
            Você é a <span className="text-[#a38c6d]">Paciente Ideal.</span>
          </h1>
          <p className="text-[#3d3935]/60 text-xs md:text-base max-w-xs mx-auto font-light leading-relaxed">
            O Método da Dra. {EXPERT_DATA.name} consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>
        </div>

        <div className="relative group shrink-0">
          <div className="relative w-40 h-52 md:w-64 md:h-80 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transform rotate-1">
            <img 
              src={IMAGES.authority1} 
              alt="Dra Paloma Lima"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full space-y-2 pb-4">
          <button 
            onClick={() => onAction('send')}
            className="w-full bg-[#a38c6d] text-white py-4 rounded-2xl font-bold text-[11px] shadow-xl hover:bg-[#8b7759] transition-all active:scale-95 btn-pulse uppercase tracking-widest"
          >
            1. Enviar minha avaliação DRA
          </button>
          
          <button 
            onClick={() => onAction('whatsapp')}
            className="w-full bg-[#2a2622] text-white py-4 rounded-2xl font-bold text-[11px] shadow-lg hover:bg-black transition-all active:scale-95 uppercase tracking-widest border border-white/5"
          >
            2. Chamar no Whatsapp sem compromisso
          </button>

          <button 
            onClick={() => onAction('continue')}
            className="w-full text-[#3d3935]/40 py-2 rounded-xl font-bold text-[9px] hover:text-[#a38c6d] transition-colors uppercase tracking-[0.3em]"
          >
            3. Não enviar e continuar no site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
