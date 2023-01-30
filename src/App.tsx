import React from 'react';
import './App.css';
import surveyData from "./fixtures/survey.json"

function App() {
  return (
    <div className="App">
      <h1>Culture Amp</h1>
      <h2>{surveyData.name}</h2>
      <div data-testid="question-15-average">
        {/** @todo: Output the average here */}
      </div>
    </div>
  );
}

export default App;
