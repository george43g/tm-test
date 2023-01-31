import React from 'react';
import './App.css';
import surveyData from './fixtures/survey.json';
import Participation from './Participation';

function App() {
  return (
    <div className="App">
      <h1>A&S Labels</h1>
      <h2>{surveyData.name}</h2>
      <Participation survey={surveyData} />
      <div data-testid="question-15-average">
        {/** @todo: Output the average here */}
      </div>
    </div>
  );
}

export default App;
