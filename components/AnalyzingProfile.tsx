
import React, { useState, useEffect } from 'react';
import { Sparkles, Scan, ShieldCheck, Database } from 'lucide-react';
import { IMAGES } from '../constants.ts';

const AnalyzingProfile: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Analisando simetria facial...",
    "Mapeando pontos de harmonização...",
    "Cruzando dados com protocolos de segurança...",
    "Personalizando seu plano de beleza...",
    "Finalizando diagnóstico exclusivo..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Ajustado para completar em ~4s

    const msgInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 900);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[130] bg-[#1c1a18] flex flex-col items-center justify-center p-8 text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#a38c6d] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#a38c6d] rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-12">
        {/* Animated Icon */}
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <Scan className="w-16 h-16 text-[#a38c6d] animate-pulse" />
            {/* Scan Line Effect */}
            <div className="absolute inset-x-0 h-1 bg-[#a38c6d] shadow-[0_0_15px_#a38c6d] animate-[scan_2s_infinite]"></div>
          </div>
          <div className="absolute -top-4 -right-4 bg-[#a38c6d] p-2 rounded-xl shadow-lg">
            <Database className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold tracking-tight">Analisando Perfil</h2>
          <p className="text-[#a38c6d] font-bold text-xs uppercase tracking-[0.3em] h-4">
            {messages[messageIndex]}
          </p>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full space-y-4">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-[#a38c6d] to-[#c5a373] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(163,140,109,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-white/30 uppercase tracking-widest">
            <span>Processando Biometria</span>
            <span>{progress}%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#a38c6d]" />
                <span className="text-[9px] uppercase font-bold tracking-tighter text-white/60">Segurança de Dados</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#a38c6d]" />
                <span className="text-[9px] uppercase font-bold tracking-tighter text-white/60">Protocolo VIP</span>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AnalyzingProfile;
