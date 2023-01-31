import * as SurveyTypes from '../SurveyTypes';
import {FC} from 'react';
import styles from './Participation.module.scss';

type Props = {survey: SurveyTypes.Survey};

const Participation: FC<Props> = ({survey}) => {
  const rate = survey.submitted_response_count / survey.participant_count;
  const percentage = (rate * 100).toFixed(2);
  return (
    <section className={styles.Participation}>
      <p>Participation rate: {percentage}%</p>
    </section>
  );
};

export default Participation;
