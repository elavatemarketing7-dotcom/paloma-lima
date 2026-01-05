
import React, { useState } from 'react';
import { EXPERT_DATA, IMAGES } from '../constants.ts';
import { User, ShieldCheck, Sparkles, Heart, MessageSquare, ArrowRight, Instagram, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onCtaClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCtaClick }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="bg-[#ece9e6] text-[#2a2622] antialiased overflow-x-hidden">
      {/* 1. HERO SECTION - Totalmente Estática e Pincelada */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={IMAGES.hero} 
            alt="Dra. Paloma Lima" 
            className="w-full h-full object-cover object-[75%_center] md:object-right transform-gpu"
            style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18] via-[#1c1a18]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1a18]/70 via-transparent to-transparent md:from-[#1c1a18]/90"></div>
        </div>

        <div className="relative z-10 p-5 md:p-16 max-w-6xl mx-auto w-full mb-10 md:mb-12">
          <div className="space-y-4 md:space-y-8 animate-in slide-in-from-bottom duration-700 max-w-lg">
            <span className="inline-block px-3 py-1.5 bg-[#a38c6d] text-white rounded-full text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg">
              {EXPERT_DATA.profession}
            </span>
            <div className="space-y-1">
              <p className="text-lg md:text-3xl font-serif text-white/80 italic">Eu sou a</p>
              <h1 className="text-5xl md:text-9xl font-serif font-bold text-white leading-[1] tracking-tight">
                <span className="text-[#a38c6d]">Dra. Paloma</span> <br/> Lima
              </h1>
            </div>
            <p className="text-base md:text-2xl text-white/90 max-w-[280px] md:max-w-md font-light leading-snug">
              Realço sua beleza de forma <span className="text-[#a38c6d] font-semibold italic">natural e segura</span>.
            </p>
            
            <div className="pt-4 space-y-4">
              <button 
                onClick={onCtaClick}
                className="w-full md:w-auto px-8 py-5 bg-[#a38c6d] text-white rounded-full font-bold text-lg shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 tracking-wide border border-white/20"
              >
                AGENDAR AVALIAÇÃO
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-start gap-3 text-[9px] md:text-[11px] text-white/50 font-bold tracking-[0.2em] uppercase">
                <span className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-[#a38c6d]"/> Ceará (88)</span>
                <span className="opacity-30">|</span>
                <span>{EXPERT_DATA.registry}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-16 md:py-32 px-5 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src={IMAGES.authority2} 
              alt="Dra Paloma" 
              className="relative rounded-[2rem] md:rounded-[4rem] shadow-2xl w-full aspect-[4/5] object-cover border-4 md:border-8 border-[#ece9e6]"
            />
          </div>
          <div className="space-y-6 md:space-y-12 order-1 md:order-2">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#1c1a18] leading-tight text-left">Onde a ciência encontra a arte.</h2>
              <div className="h-1.5 w-16 bg-[#a38c6d] rounded-full"></div>
            </div>
            <div className="space-y-4 text-[#2a2622]/80 leading-relaxed text-base md:text-xl font-light">
              <p>
                Especialista em Harmonização Facial no <span className="text-[#a38c6d] font-bold">Ceará</span>, meu foco é a <span className="font-semibold text-[#1c1a18]">Anatomia Facial Avançada</span>.
              </p>
              <p>
                Utilizo protocolos que garantem uma aplicação invisível aos olhos, mas transformadora para sua autoestima.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: 'Análise 3D', icon: Sparkles },
                { label: 'Insumos Luxo', icon: ShieldCheck },
                { label: 'Pós-VIP', icon: Heart },
                { label: 'Segurança', icon: User }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[9px] md:text-xs font-bold text-[#1c1a18] uppercase tracking-widest">
                  <div className="w-8 h-8 rounded-xl bg-[#a38c6d]/10 flex items-center justify-center text-[#a38c6d]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-16 md:py-32 bg-[#ece9e6]">
        <div className="px-5 md:px-12 max-w-6xl mx-auto space-y-12 md:space-y-20">
          <div className="text-center space-y-3">
            <span className="text-[#a38c6d] font-bold text-[10px] uppercase tracking-[0.4em]">Resultados Reais</span>
            <h2 className="text-3xl md:text-7xl font-serif font-bold text-[#1c1a18]">Assinatura Paloma Lima</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10">
            {IMAGES.results.slice(0, 8).map((url, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[3/4] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-lg"
                onClick={() => setSelectedImg(url)}
              >
                <img src={url} alt={`Resultado ${idx}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 md:hidden"></div>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] md:text-sm text-[#1c1a18]/40 italic max-w-xs mx-auto">
            Resultados individuais. Agende sua avaliação para entender seu caso.
          </p>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section className="py-16 md:py-32 px-5 bg-white">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-20">
          <div className="text-center space-y-2">
            <span className="text-[#a38c6d] font-bold text-[10px] uppercase tracking-[0.4em]">Sua Jornada</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1c1a18]">Apenas 3 Passos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { step: '01', title: 'WhatsApp', text: 'Equipe dedicada para entender seu desejo inicial.' },
              { step: '02', title: 'Agendamento', text: 'Escolhemos o melhor horário para você.' },
              { step: '03', title: 'Avaliação', text: 'Plano de tratamento exclusivo com a Dra.' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 md:p-10 bg-[#ece9e6] rounded-3xl border border-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-serif font-bold text-[#a38c6d]/20 mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-serif font-bold text-[#1c1a18] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#2a2622]/60">{item.text}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[#a38c6d] font-bold text-[9px] uppercase tracking-widest">
                  <CheckCircle className="w-3 h-3" /> Confirmado
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BASTIDORES & MUNDO PALOMA LIMA */}
      <section className="py-16 md:py-32 bg-[#1c1a18] overflow-hidden">
        <div className="px-5 md:px-12 max-w-6xl mx-auto mb-10 space-y-2 text-center">
          <span className="text-[#a38c6d] font-bold text-[10px] uppercase tracking-[0.4em]">Bastidores & Autoridade</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">O Mundo Paloma Lima</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-10 px-5 no-scrollbar snap-x">
          {IMAGES.lifestyle.map((url, idx) => (
            <div 
              key={idx} 
              className="flex-none w-[260px] md:w-[400px] h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl snap-center border-4 border-white/10"
              onClick={() => setSelectedImg(url)}
            >
              <img src={url} alt={`Bastidores ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center">
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">Deslize para ver mais →</p>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-20 px-5 bg-[#ece9e6]">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#1c1a18] leading-tight">
            Beleza que <span className="text-[#a38c6d]">irradia.</span>
          </h2>
          <button 
            onClick={onCtaClick}
            className="w-full md:w-auto px-10 py-6 bg-[#a38c6d] text-white rounded-full font-bold text-lg shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 mx-auto border border-white/20"
          >
            QUERO MINHA CONSULTA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-16 md:py-32 px-5 bg-[#1c1a18] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="p-4 bg-white rounded-2xl inline-block">
              <img src={IMAGES.logo} alt="Logo" className="h-8 md:h-12 w-auto grayscale brightness-0" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-5xl font-serif font-bold">{EXPERT_DATA.name}</h3>
              <p className="text-[#a38c6d] font-bold text-xs tracking-widest uppercase">{EXPERT_DATA.profession}</p>
              <p className="text-white/20 text-[9px] tracking-widest uppercase">{EXPERT_DATA.registry}</p>
            </div>
            <div className="flex gap-4">
              <a href={EXPERT_DATA.instagram} target="_blank" className="p-4 bg-white/5 rounded-full border border-white/10 text-white/50 hover:text-white"><Instagram size={20}/></a>
              <button onClick={onCtaClick} className="p-4 bg-white/5 rounded-full border border-white/10 text-white/50 hover:text-white"><MessageSquare size={20}/></button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:items-end text-center md:text-right space-y-10 md:space-y-0">
             <p className="text-white/40 text-sm md:text-lg max-w-xs md:ml-auto leading-relaxed">Referência em resultados naturais no Ceará.</p>
             <p className="font-serif text-5xl md:text-7xl text-white/5 italic select-none">Paloma Lima</p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-xl flex items-center justify-center p-5 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl border border-white/10 animate-in zoom-in duration-300" 
            alt="Fullscreen View" 
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;