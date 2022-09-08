import { createContext } from 'react';
import { useReducer } from 'react';
import questions from '../components/Quiz/data';
import { shuffleAnswers } from '../helpers';

// ÉTATS INITIALS
const initialState = {
  // Les questions
  questions,
  // Nombre de question initial
  currentQuestionIndex: 0,
  // Div pour montrer le résultat
  showResults: false,
  // Nombre de question correct
  correctAnswerCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_ANSWER': {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case 'NEXT_QUESTION': {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: '',
      };
    }
    case 'RESTART': {
      return initialState;
    }
    default:
      return state;
  }
};

// Création du context
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
