import React, {useEffect} from 'react';
import './App.css';
import surveyData from './fixtures/survey.json';
import Participation from './Participation';
import SurveyQuestion from './SurveyQuestion';

function App() {
  useEffect(() => {
    document.title = 'Culture Amp Coding Test';
  }, []);
  const questions = surveyData.questions.map((question, index) => (
    <SurveyQuestion question={question} key={index} />
  ));
  return (
    <div className="App">
      <h1>A&S Labels</h1>
      <h2>{surveyData.name}</h2>
      <Participation survey={surveyData} />
      {questions}
    </div>
  );
}
// <div data-testid="question-15-average">
//   {/** @todo: Output the average here */}
// </div>

export default App;
