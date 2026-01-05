
export enum AppState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  MAIN = 'MAIN'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizAnswers {
  [key: number]: string;
}
