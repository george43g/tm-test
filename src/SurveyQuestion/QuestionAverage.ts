import {Question} from '../SurveyTypes';

export default function (question: Question) {
  const ratingArray: number[] = question.survey_responses
    .map(response => response.response_content)
    .filter(responseContent => responseContent !== '')
    .filter(isNumeric)
    .map(val => parseInt(val, 10)) // ! The bug was here! map passes additional args
    .filter(responseNumber => responseNumber <= 5 && responseNumber >= 1);

  const sum = ratingArray.reduce((a, b) => a + b, 0);
  return sum / ratingArray.length;
}

function isNumeric(str: string) {
  if (typeof str !== 'string') return false; // we only process strings!
  const number = Number(str);
  return !isNaN(number);
}
