const data = [
  {
    question: 'What is the correct command to create a new React project ?',
    incorrectAnswers: [
      'npx create-react-app',
      'npm create-react-app',
      'npm create-react-app myReactApp',
    ],
    correctAnswer: 'npx create-react-app myReactApp',
  },
  {
    question:
      'What command is used to start the React local development server ?',
    incorrectAnswers: ['npm serve', 'npm build', 'npm run dev'],
    correctAnswer: 'npm start',
  },
  {
    question:
      'What is the default local host port that a React development server uses ?',
    incorrectAnswers: ['8888', '5050', '3500'],
    correctAnswer: '3000',
  },
  {
    question:
      'Which operator can be used to conditionally render a React component ?',
    incorrectAnswers: ['::', '??', '||'],
    correctAnswer: '&&',
  },
  {
    question: 'What tool does React use to compile JSX ?',
    incorrectAnswers: ['JSX Compiler', 'React Router', 'ReactDOM'],
    correctAnswer: 'Babel',
  },
];

export default data;

// Questions du quizz
