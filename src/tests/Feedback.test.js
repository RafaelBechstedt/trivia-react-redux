// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
// import App from '../App';
// import Feedback from '../pages/Feedback';

//   it('', async() => {
//     renderWithRouterAndRedux(<App />);
//     await screen.findByText(/Feedback/i);
//     const title = screen.getByTestId('feedback-text');
//     expect(title).toBeInTheDocument();
//   });
//   it('', async() => {
//     renderWithRouterAndRedux(<App />);
//     await screen.findByText(/Feedback/i);
//     const score = screen.getByTestId('feedback-total-score');
//     expect(score).toBeInTheDocument();
//   });
//   it('', async() => {
//     renderWithRouterAndRedux(<App />);
//     await screen.findByText(/Feedback/i);
//     const assertions = screen.getByTestId('feedback-total-question');
//     expect(assertions).toBeInTheDocument();
//   });
//   it('', () => {
//     const { history } = renderWithRouterAndRedux(<Feedback />);
//     const button = screen.getByTestId('btn-play-again');
//     expect(button).toBeInTheDocument();
//     userEvent.click(button);
//     const { location: { pathname } } = history;
//     expect(pathname).toBe('/');
//   });
//   it('', () => {
//     const { history } = renderWithRouterAndRedux(<Feedback />);
//     const button = screen.getByTestId('btn-ranking');
//     expect(button).toBeInTheDocument();
//     userEvent.click(button);
//     const { location: { pathname } } = history;
//     expect(pathname).toBe('/ranking');
//   });

import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

it('', () => {
  const INITIAL_STATE = {
    player: {
      email: 'leokepler@gmail.com',
      name: 'Leonardo Kepler',
      score: 110,
      assertions: 2
    }
  }

  const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/feedback')
  const feedbackText = screen.getByTestId('feedback-text')
  expect(feedbackText).toHaveTextContent('Could be better...');
  const assertions = screen.getByTestId('feedback-total-question');
  const score = screen.getByTestId('feedback-total-score');
  expect(score).toHaveTextContent('110');
  expect(assertions.innerHTML).toBe('2');
})

it('', () => {
  const INITIAL_STATE = {
    player: {
      email: 'leokepler@gmail.com',
      name: 'Leonardo Kepler',
      score: 510,
      assertions: 5
    }
  }

  const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/feedback')
  const feedbackText = screen.getByTestId('feedback-text')
  expect(feedbackText).toHaveTextContent('Well Done!');
  const assertions = screen.getByTestId('feedback-total-question');
  const score = screen.getByTestId('feedback-total-score');
  expect(score).toHaveTextContent('510');
  expect(assertions.innerHTML).toBe('5');
})