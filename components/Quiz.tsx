
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_DATA, IMAGES } from '../constants';
import { QuizAnswers } from '../types';

interface QuizProps {
  onComplete: (answers: QuizAnswers) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers), 300);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md flex items-center justify-center p-3 md:p-4">
      <div className="bg-[#f4f1ee] w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-visible flex flex-col max-h-[90vh] border border-white/20 relative mt-10">
        
        {/* Foto Flutuante com Moldura */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-[120]">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-3">
            <img 
              src={IMAGES.quizExpert} 
              alt="Dra Paloma Lima" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a2622]/20 to-transparent"></div>
          </div>
          {/* Badge de Verificado ou Status */}
          <div className="absolute -bottom-2 -right-2 bg-[#9e896a] text-white p-1.5 rounded-full shadow-lg border-2 border-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-t-full overflow-hidden mt-0">
          <div 
            className="h-full bg-[#9e896a] transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col overflow-hidden pt-16">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#9e896a]">
              Etapa {currentStep + 1} / {QUIZ_QUESTIONS.length}
            </span>
            <button onClick={onSkip} className="text-gray-400 hover:text-[#9e896a] text-[10px] uppercase font-bold tracking-tighter">Sair</button>
          </div>

          <div className="space-y-4 md:space-y-6 overflow-y-auto no-scrollbar pb-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2a2622] leading-tight text-center">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>

            <div className="grid gap-2">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 md:p-5 text-left rounded-2xl border transition-all active:scale-[0.98] shadow-sm flex items-center justify-between group ${
                    answers[QUIZ_QUESTIONS[currentStep].id] === option 
                    ? 'border-[#9e896a] bg-[#9e896a] text-white' 
                    : 'border-white bg-white/80 hover:border-[#9e896a]/30 text-gray-600'
                  }`}
                >
                  <span className="text-sm font-medium tracking-tight pr-4">{option}</span>
                  <div className={`w-2 h-2 rounded-full ${answers[QUIZ_QUESTIONS[currentStep].id] === option ? 'bg-white' : 'bg-[#9e896a]/20'}`}></div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-center gap-2">
            <div className="w-1 h-1 bg-[#9e896a] rounded-full opacity-30"></div>
            <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
              Avaliação Dra. {EXPERT_DATA.name}
            </p>
            <div className="w-1 h-1 bg-[#9e896a] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
