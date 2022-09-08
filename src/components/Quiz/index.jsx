import Style from './styles';
import { QuizContext } from '../../contexts/quizz';
import { useContext } from 'react';
import Questions from './questions';

export default function QuizCat() {
  // On récupère le context avec nos questions
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <Style>
      <div className='quiz'>
        {quizState.showResults && (
          <div className='results'>
            <div className='congratulations'>Congratulations !</div>
            <div className='results-infos'>
              <div className='result-final'>
                You have answered all the questions !
              </div>
              <div className='result-final'>
                You've got {quizState.correctAnswerCount} of{' '}
                {quizState.questions.length} right.
              </div>
              <div
                className='next-button'
                onClick={() => dispatch({ type: 'RESTART' })}
              >
                RESTART THE QUIZ
              </div>
            </div>
          </div>
        )}
        {!quizState.showResults && (
          <div>
            <div className='score'>
              Quiz ReactJS {quizState.currentQuestionIndex + 1} /{' '}
              {quizState.questions.length}
            </div>
            <Questions />
            <div
              className='next-button'
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
            >
              NEXT QUESTION
            </div>
          </div>
        )}
      </div>
    </Style>
  );
}
