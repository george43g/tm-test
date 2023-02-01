import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('render Culture Amp element', async () => {
  render(<App />);

  await screen.findByText(/Acme Engagement/i);
  await waitFor(() => expect(document.title).toMatch(/Culture Amp/i));
});

test('calculates the average', async () => {
  render(<App />);

  const questionAverage = await screen.findByTestId('question-15-average');

  expect(questionAverage).toHaveTextContent('3.70');
});
