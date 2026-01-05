
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES } from '../constants.ts';
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
    <div className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#f4f1ee] w-full max-w-[320px] rounded-[2rem] shadow-2xl overflow-visible flex flex-col relative border border-white/20">
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-t-full overflow-hidden">
          <div 
            className="h-full bg-[#a38c6d] transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#a38c6d]">
              Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <button onClick={onSkip} className="text-gray-400 text-[8px] uppercase font-bold">Sair</button>
          </div>

          <div className="space-y-5">
            <h2 className="text-lg font-serif font-bold text-[#2a2622] leading-tight text-center">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>

            <div className="grid gap-2">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 text-left rounded-xl border transition-all active:scale-[0.97] flex items-center justify-between group ${
                    answers[QUIZ_QUESTIONS[currentStep].id] === option 
                    ? 'border-[#a38c6d] bg-[#a38c6d] text-white' 
                    : 'border-white bg-white/80 text-gray-600'
                  }`}
                >
                  <span className="text-[11px] font-medium leading-tight pr-4">{option}</span>
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${answers[QUIZ_QUESTIONS[currentStep].id] === option ? 'bg-white' : 'bg-[#a38c6d]/20'}`}></div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/5 text-center">
            <p className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">
              Avaliação Dra. Paloma Lima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
