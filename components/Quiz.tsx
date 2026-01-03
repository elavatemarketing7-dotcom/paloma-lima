
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_DATA, IMAGES } from '../constants.ts';
import { QuizAnswers } from '../types.ts';

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
    <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#f4f1ee] w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-visible flex flex-col max-h-[95vh] border border-white/20 relative">
        
        {/* Foto Flutuante */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-[120]">
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src={IMAGES.quizExpert} 
              alt="Dra Paloma Lima" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-t-full overflow-hidden">
          <div 
            className="h-full bg-[#a38c6d] transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col overflow-hidden pt-16">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a38c6d]">
              Pergunta {currentStep + 1} / {QUIZ_QUESTIONS.length}
            </span>
            <button onClick={onSkip} className="text-gray-400 hover:text-[#a38c6d] text-[10px] uppercase font-bold tracking-tighter">Pular</button>
          </div>

          <div className="space-y-4 overflow-y-auto no-scrollbar pb-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2a2622] leading-tight text-center">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>

            <div className="grid gap-2">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 text-left rounded-2xl border transition-all active:scale-[0.98] shadow-sm flex items-center justify-between group ${
                    answers[QUIZ_QUESTIONS[currentStep].id] === option 
                    ? 'border-[#a38c6d] bg-[#a38c6d] text-white' 
                    : 'border-white bg-white/80 hover:border-[#a38c6d]/30 text-gray-600'
                  }`}
                >
                  <span className="text-sm font-medium pr-4">{option}</span>
                  <div className={`w-2 h-2 rounded-full ${answers[QUIZ_QUESTIONS[currentStep].id] === option ? 'bg-white' : 'bg-[#a38c6d]/20'}`}></div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-center gap-2">
            <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
              Avaliação Dra. Paloma Lima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
