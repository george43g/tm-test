import {FC} from 'react';
import * as SurveyTypes from '../SurveyTypes';
import questionAverage from './QuestionAverage';
import styles from './SurveyQuestion.module.scss';

type Props = {question: SurveyTypes.Question};

const SurveyQuestion: FC<Props> = ({question}) => {
  if (!question || !question.id)
    throw Error('NO Question or Question ID Found!');
  const questionId = question.id;
  const dataTestId = `question-${questionId}-average`;

  return (
    <div className={styles.SurveyQuestion} data-testid={dataTestId}>
      <span className={styles.question}>{question.description}</span>
      <span className={styles.rating}>
        Ave: {questionAverage(question).toFixed(2)}
      </span>
    </div>
  );
};

export default SurveyQuestion;
