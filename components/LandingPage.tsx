
import React, { useState } from 'react';
import { EXPERT_DATA, IMAGES } from '../constants.ts';
import { User, ShieldCheck, Sparkles, Heart, MessageSquare, ArrowRight, Instagram, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onCtaClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCtaClick }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="bg-[#ece9e6] text-[#2a2622]">
      {/* Floating Logo Header */}
      <nav className="fixed top-0 left-0 right-0 z-[50] p-4 md:p-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="pointer-events-auto bg-white/90 backdrop-blur-xl p-2 px-4 md:p-3 md:px-6 rounded-2xl border border-white shadow-2xl">
            <img 
              src={IMAGES.logo} 
              alt="Dra Paloma Lima" 
              className="h-8 md:h-12 w-auto grayscale brightness-0" 
            />
          </div>
          <button 
            onClick={onCtaClick}
            className="hidden md:flex bg-[#a38c6d] text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl pointer-events-auto hover:bg-[#8b7759] transition-all tracking-wider border border-white/20"
          >
            AGENDE AGORA
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Dra. Paloma Lima" 
            className="w-full h-full object-cover object-[80%_center] md:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18] via-[#1c1a18]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1a18]/80 via-[#1c1a18]/20 to-transparent md:from-[#1c1a18]/90"></div>
        </div>

        <div className="relative z-10 p-6 md:p-16 max-w-4xl mx-auto w-full mb-12">
          <div className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom duration-1000 max-w-xl">
            <span className="inline-block px-4 py-2 bg-[#a38c6d] text-white rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase shadow-lg border border-white/20">
              {EXPERT_DATA.profession}
            </span>
            <div className="space-y-2">
              <p className="text-xl md:text-3xl font-serif text-white/80 italic text-glow">Eu sou a</p>
              <h1 className="text-6xl md:text-9xl font-serif font-bold text-white leading-[0.9] text-glow">
                <span className="text-[#a38c6d]">Dra. Paloma</span> <br/> Lima
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-sm font-light leading-relaxed">
              Realço sua beleza de forma <span className="text-[#a38c6d] font-semibold italic border-b-2 border-[#a38c6d]/50">natural e segura</span>.
            </p>
            
            <div className="pt-6 space-y-4">
              <button 
                onClick={onCtaClick}
                className="w-full md:w-auto px-12 py-6 bg-[#a38c6d] text-white rounded-full font-bold text-xl shadow-[0_20px_50px_rgba(163,140,109,0.4)] hover:scale-105 btn-pulse flex items-center justify-center gap-4 tracking-wide border border-white/20"
              >
                AGENDAR CONSULTA GRATUITA
                <MessageSquare className="w-6 h-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-4 items-center text-[10px] md:text-[11px] text-white/50 font-bold tracking-[0.3em] uppercase">
                <span className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-[#a38c6d]"/> Referência no Ceará</span>
                <span className="hidden md:block opacity-30">|</span>
                <span>Registro {EXPERT_DATA.registry}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-10 bg-[#a38c6d]/10 rounded-[5rem] rotate-3 blur-3xl opacity-50"></div>
            <img 
              src={IMAGES.authority2} 
              alt="Dra Paloma" 
              className="relative rounded-[4rem] shadow-2xl w-full aspect-[4/5] object-cover border-8 border-[#ece9e6]"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#1c1a18] p-8 rounded-[3rem] shadow-2xl border border-white/10 max-w-[240px] hidden md:block">
              <p className="text-[10px] font-bold text-[#a38c6d] uppercase mb-2 tracking-[0.2em]">Filosofia Paloma Lima</p>
              <p className="text-base text-white/90 italic font-light leading-relaxed">"A melhor harmonização é aquela que devolve sua luz, mantendo sua identidade intacta."</p>
            </div>
          </div>
          <div className="space-y-12 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1c1a18] leading-tight">Onde a ciência encontra a arte.</h2>
              <div className="h-2 w-32 bg-[#a38c6d] rounded-full shadow-sm"></div>
            </div>
            <div className="space-y-8 text-[#2a2622]/80 leading-relaxed text-xl font-light">
              <p>
                Como especialista em Harmonização Facial no <span className="text-[#a38c6d] font-bold">Ceará</span>, meu foco é a <span className="font-semibold text-[#1c1a18]">Anatomia Facial Avançada</span>. Não trabalho com padrões impostos, mas com o que o seu rosto pede para brilhar.
              </p>
              <p>
                Utilizo os protocolos mais sofisticados do mundo para garantir que cada aplicação seja invisível aos olhos destreinados, mas transformadora para a sua autoestima.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Análise 3D Facial', icon: Sparkles },
                { label: 'Insumos de Luxo', icon: ShieldCheck },
                { label: 'Pós-Protocolo VIP', icon: Heart },
                { label: 'Segurança Médica', icon: User }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xs font-bold text-[#1c1a18] uppercase tracking-widest group">
                  <div className="w-10 h-10 rounded-2xl bg-[#a38c6d]/10 flex items-center justify-center text-[#a38c6d] group-hover:bg-[#a38c6d] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-32 bg-[#ece9e6]">
        <div className="px-6 md:px-12 max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <span className="text-[#a38c6d] font-bold text-[12px] uppercase tracking-[0.5em]">Resultados de Excelência</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1c1a18]">Assinatura Paloma Lima</h2>
            <div className="w-20 h-1 bg-[#a38c6d] mx-auto opacity-50"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {IMAGES.results.slice(0, 8).map((url, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden cursor-zoom-in shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700"
                onClick={() => setSelectedImg(url)}
              >
                <img src={url} alt={`Resultado ${idx}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                  <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] uppercase font-bold tracking-widest">
                    Ver detalhes
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#1c1a18]/40 italic max-w-lg mx-auto leading-relaxed">
            Respeitamos a individualidade de cada face. Resultados podem variar conforme a anatomia e hábitos de cada paciente.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-32 px-6 md:px-12 bg-[#1c1a18] text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">Padrão Ouro de Atendimento</h2>
            <p className="text-[#a38c6d] font-bold text-sm uppercase tracking-[0.3em]">Onde cada detalhe importa.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Protocolo de Segurança", text: "Insumos premium das melhores marcas mundiais para sua total tranquilidade." },
              { icon: User, title: "Atendimento Exclusivo", text: "Minha agenda é limitada para que eu possa dedicar tempo real a cada face." },
              { icon: Heart, title: "Naturalidade Acima de Tudo", text: "Meu olhar é treinado para realçar, nunca para transformar em algo artificial." },
              { icon: Sparkles, title: "Técnicas Modernas", text: "Constante atualização com as maiores autoridades mundiais em estética." },
              { icon: MessageSquare, title: "Pós-Tratamento", text: "Suporte direto e acompanhamento de cada etapa da sua recuperação." },
              { icon: ShieldCheck, title: "Ambiente Boutique", text: "Um consultório planejado para ser seu santuário de beleza e conforto." },
            ].map((card, idx) => (
              <div key={idx} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5 hover:bg-white/10 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-3xl bg-[#a38c6d] flex items-center justify-center text-white mb-8 shadow-[0_10px_30px_rgba(163,140,109,0.3)]">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-[#a38c6d] transition-colors">{card.title}</h3>
                <p className="text-white/50 text-base leading-relaxed font-light">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#a38c6d] to-[#c5a373] rounded-[4rem] p-12 md:p-24 text-center text-white shadow-[0_40px_100px_rgba(163,140,109,0.3)] relative overflow-hidden border border-white/20">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg">Você pronta para o seu <br/> melhor momento.</h2>
            <button 
              onClick={onCtaClick}
              className="px-16 py-7 bg-[#1c1a18] text-white rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-5 mx-auto tracking-wider"
            >
              AGENDAR MINHA AVALIAÇÃO
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[#a38c6d] font-bold text-[12px] uppercase tracking-[0.5em]">Jornada da Paciente</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1a18]">Sua transformação em 3 passos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Contato VIP', text: 'Você inicia o atendimento pelo WhatsApp, onde nossa equipe entende seu desejo inicial.' },
              { step: '02', title: 'Agendamento', text: 'Escolhemos o melhor horário para sua avaliação presencial ou online sem compromisso.' },
              { step: '03', title: 'Avaliação Estética', text: 'Análise facial profunda com a Dra. Paloma para criar seu plano de tratamento exclusivo.' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-10 bg-[#ece9e6] rounded-[3rem] border border-white shadow-sm hover:shadow-xl transition-all group">
                <span className="text-6xl font-serif font-bold text-[#a38c6d]/20 absolute top-6 right-8 group-hover:text-[#a38c6d]/40 transition-colors">{item.step}</span>
                <h3 className="text-2xl font-serif font-bold text-[#1c1a18] mb-4">{item.title}</h3>
                <p className="text-[#2a2622]/60 leading-relaxed">{item.text}</p>
                <div className="mt-6 flex items-center gap-2 text-[#a38c6d] font-bold text-[10px] uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" /> Gratuito e Seguro
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS */}
      <section className="py-32 bg-[#ece9e6]">
        <div className="px-6 md:px-12 max-w-6xl mx-auto mb-16 space-y-4 text-center">
          <span className="text-[#a38c6d] font-bold text-[12px] uppercase tracking-[0.5em]">O Mundo Paloma Lima</span>
          <h2 className="text-5xl font-serif font-bold text-[#1c1a18]">Bastidores & Autoridade</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-16 px-6 no-scrollbar snap-x">
          {IMAGES.lifestyle.map((url, idx) => (
            <div key={idx} className="flex-none w-80 md:w-96 h-[30rem] md:h-[35rem] rounded-[3rem] overflow-hidden shadow-2xl snap-center transition-all hover:scale-[1.02] border-8 border-white">
              <img src={url} alt={`Dra Paloma ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-40 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-[#1c1a18] leading-[0.9]">
              Beleza que <span className="text-[#a38c6d]">irradia.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#1c1a18]/40 font-light italic max-w-2xl mx-auto">
              "Um rosto harmonioso abre portas, eleva sorrisos e transforma a maneira como você encara o mundo."
            </p>
          </div>
          <div className="space-y-10">
            <button 
              onClick={onCtaClick}
              className="w-full md:w-auto px-20 py-8 bg-[#a38c6d] text-white rounded-full font-bold text-2xl shadow-[0_25px_60px_rgba(163,140,109,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-6 mx-auto tracking-widest border border-white/20"
            >
              QUERO MINHA CONSULTA
              <MessageSquare className="w-8 h-8" />
            </button>
            <div className="flex items-center justify-center gap-4 text-[#a38c6d] font-bold text-[13px] uppercase tracking-[0.4em]">
               <Sparkles className="w-5 h-5"/>
               <span>Avaliação 100% Gratuita</span>
               <Sparkles className="w-5 h-5"/>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-32 px-6 bg-[#1c1a18] text-white relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-block p-6 bg-white rounded-[2.5rem] shadow-2xl">
                <img 
                  src={IMAGES.logo} 
                  alt="Logo Premium" 
                  className="h-14 md:h-20 w-auto grayscale brightness-0" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-serif font-bold">{EXPERT_DATA.name}</h3>
                <p className="text-[#a38c6d] font-bold text-base tracking-[0.4em] uppercase">{EXPERT_DATA.profession}</p>
                <p className="text-white/20 text-xs tracking-widest uppercase">{EXPERT_DATA.registry}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a href={EXPERT_DATA.instagram} target="_blank" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#a38c6d] hover:border-[#a38c6d] hover:bg-white/10 transition-all duration-500">
                <Instagram className="w-8 h-8" />
              </a>
              <button onClick={onCtaClick} className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#a38c6d] hover:border-[#a38c6d] hover:bg-white/10 transition-all duration-500">
                <MessageSquare className="w-8 h-8" />
              </button>
            </div>
          </div>
          <div className="md:text-right space-y-16 flex flex-col justify-between">
             <div className="space-y-6">
                <p className="text-white/40 text-lg max-w-sm md:ml-auto leading-relaxed">Referência em resultados naturais em todo o Ceará.</p>
                <p className="text-[#a38c6d] font-serif text-3xl italic">A arte de harmonizar com segurança.</p>
             </div>
            <div className="pt-16 border-t border-white/5">
               <p className="text-[11px] text-white/10 uppercase tracking-[0.5em] mb-6">Designed for Excellence</p>
               <p className="font-serif text-7xl text-white/5 italic select-none pointer-events-none tracking-tight">
                Paloma Lima
               </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-500"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <img 
              src={selectedImg} 
              className="max-w-full max-h-[85vh] rounded-[3rem] shadow-[0_0_120px_rgba(163,140,109,0.3)] border border-white/10 animate-in zoom-in duration-500" 
              alt="Fullscreen View" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
