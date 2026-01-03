
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface ResultPageProps {
  onAction: (action: 'send' | 'continue' | 'whatsapp') => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onAction }) => {
  return (
    <div className="fixed inset-0 z-[120] bg-[#f4f1ee] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-500">
      {/* Mini Header */}
      <div className="bg-white/90 backdrop-blur-md py-3 px-6 flex items-center justify-between shadow-sm border-b border-black/5 shrink-0">
        <img 
          src={IMAGES.logo} 
          alt="Logo PL" 
          className="h-7 w-auto grayscale brightness-0" 
        />
        <div className="px-3 py-1 bg-[#9e896a]/10 rounded-full border border-[#9e896a]/20">
          <p className="text-[#9e896a] font-bold text-[8px] uppercase tracking-[0.2em]">
            Perfil Compatível
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center space-y-4 md:space-y-8 max-w-lg mx-auto overflow-y-auto no-scrollbar">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#2a2622] leading-tight">
            Você é a <span className="text-[#9e896a]">Paciente Ideal.</span>
          </h1>
          <p className="text-[#3d3935]/60 text-xs md:text-base max-w-xs mx-auto font-light leading-relaxed">
            O Método da Dra. {EXPERT_DATA.name} foi desenhado exatamente para o seu perfil.
          </p>
        </div>

        {/* Expert Highlight - More Compact on Mobile */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-4 bg-[#9e896a]/10 rounded-[2.5rem] blur-2xl opacity-50"></div>
          <div className="relative w-40 h-52 md:w-64 md:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white transform rotate-1">
            <img 
              src={IMAGES.authority1} 
              alt="Dra Paloma Lima"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-[#2a2622] via-[#2a2622]/40 to-transparent text-white text-left">
              <p className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-[#9e896a]">Especialista</p>
              <p className="text-[10px] md:text-sm italic font-light">Sua essência, meu foco.</p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-2 md:space-y-3 pb-4">
          <button 
            onClick={() => onAction('send')}
            className="w-full bg-[#9e896a] text-white py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-[11px] md:text-sm shadow-xl hover:bg-[#8b7759] transition-all active:scale-95 btn-pulse uppercase tracking-widest"
          >
            1. Enviar minha avaliação DRA
          </button>
          
          <button 
            onClick={() => onAction('whatsapp')}
            className="w-full bg-[#2a2622] text-white py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-[11px] md:text-sm shadow-lg hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest border border-white/5"
          >
            2. Chamar no Whatsapp VIP
          </button>

          <button 
            onClick={() => onAction('continue')}
            className="w-full text-[#3d3935]/40 py-2 rounded-xl font-bold text-[9px] md:text-[10px] hover:text-[#9e896a] transition-colors uppercase tracking-[0.3em]"
          >
            3. Ver site e resultados
          </button>
        </div>
      </div>

      <div className="p-4 text-center text-[7px] text-[#3d3935]/30 uppercase tracking-[0.4em] bg-white/30 border-t border-[#9e896a]/10 shrink-0">
        <span className="font-medium">© {EXPERT_DATA.name} • Estética Facial Premium</span>
      </div>
    </div>
  );
};

export default ResultPage;
