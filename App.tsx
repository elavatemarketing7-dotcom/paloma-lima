
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, QuizAnswers } from './types';
import { EXPERT_DATA } from './constants';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import InitialOverlay from './components/InitialOverlay';

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>(AppState.INITIAL);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleStartQuiz = () => setCurrentState(AppState.QUIZ);
  const handleGoToSite = () => setCurrentState(AppState.MAIN);
  
  const handleQuizComplete = useCallback((finalAnswers: QuizAnswers) => {
    setAnswers(finalAnswers);
    setCurrentState(AppState.RESULT);
  }, []);

  const handleFinalAction = (action: 'send' | 'continue' | 'whatsapp') => {
    if (action === 'send' || action === 'whatsapp') {
      const message = encodeURIComponent(
        `Olá Dra. Paloma! Acabei de fazer sua avaliação de perfil.\n\n` +
        Object.entries(answers).map(([id, ans]) => `P${id}: ${ans}`).join('\n') +
        `\n\nQuero saber mais sobre o método!`
      );
      window.open(`https://wa.me/${EXPERT_DATA.whatsapp}?text=${message}`, '_blank');
      if (action === 'send') setCurrentState(AppState.MAIN);
    } else {
      setCurrentState(AppState.MAIN);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Background stays active to preserve visual continuity */}
      <LandingPage onCtaClick={() => window.open(`https://wa.me/${EXPERT_DATA.whatsapp}`, '_blank')} />

      {currentState === AppState.INITIAL && (
        <InitialOverlay onStartQuiz={handleStartQuiz} onSkip={handleGoToSite} />
      )}

      {currentState === AppState.QUIZ && (
        <Quiz onComplete={handleQuizComplete} onSkip={handleGoToSite} />
      )}

      {currentState === AppState.RESULT && (
        <ResultPage onAction={handleFinalAction} />
      )}
    </div>
  );
};

export default App;
