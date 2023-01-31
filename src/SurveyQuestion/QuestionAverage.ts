import {Question} from '../SurveyTypes';

export default function (question: Question) {
  const ratingArray: number[] = question.survey_responses
    .map(response => response.response_content)
    .map(response => {
      // console.log(response);
      return response;
    })
    .filter(responseContent => responseContent !== '')
    .filter(isNumeric)
    .map(parseInt)
    .filter(responseNumber => responseNumber <= 5 && responseNumber >= 1);

  const sum = ratingArray.reduce((a, b) => a + b, 0);
  return sum / ratingArray.length;
}

function isNumeric(str: string) {
  if (typeof str !== 'string') return false; // we only process strings!
  const number = Number(str);
  return !isNaN(number);
}
