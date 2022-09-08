import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './App';
import { QuizProvider } from './contexts/quizz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Context disponible sur toute l'application */}
    <QuizProvider>
      <Reset />
      <App />
    </QuizProvider>
  </React.StrictMode>
);
