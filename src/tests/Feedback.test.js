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

const correctAnswer = 'correct-answer';
const wrongAnswer = 'wrong-answer-0';

it('', async () => {
  // Acessa o jogo
  const { history } = renderWithRouterAndRedux(<App />);
  let inputEmail = screen.getByTestId('input-gravatar-email');
  let inputName = screen.getByTestId('input-player-name');
  let btnPlay = screen.getByTestId('btn-play');
  expect(btnPlay).toBeDisabled();
  userEvent.clear(inputEmail);
  userEvent.clear(inputName);
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.type(inputName, 'teste');
  expect(btnPlay).not.toBeDisabled();
  userEvent.click(btnPlay);

  // Joga
  await screen.findByText(/Trivia/i);
  await waitFor(() => { expect(history.location.pathname).toBe('/game'); });
  await waitFor(() => {
    expect(
      screen.getByTestId('question-text'),
    ).toBeInTheDocument();
  });
  let btnCorrectAnswer = screen.getByTestId(correctAnswer);
  let btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer)[0];
  userEvent.click(btnCorrectAnswer);
  let btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnCorrectAnswer = screen.getByTestId(correctAnswer);
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer);
  userEvent.click(btnIncorrectAnswer[0]);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnCorrectAnswer = screen.getByTestId(correctAnswer);
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnCorrectAnswer = screen.getByTestId(correctAnswer);
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  // Verifica se está na tela de feedback

  await waitFor(() => { expect(history.location.pathname).toBe('/Feedback'); });
  expect(screen.getByTestId('feedback-text').innerHTML).toContain('Well Done!');
  let assertions = screen.getByTestId('feedback-total-question');
  let score = screen.getByTestId('feedback-total-score');
  expect(score).toBeInTheDocument();
  expect(assertions.innerHTML).toBe('4');

  // Joga novamente
  const btnPlayAgain = screen.getByTestId('btn-play-again');
  userEvent.click(btnPlayAgain);
  inputEmail = screen.getByTestId('input-gravatar-email');
  inputName = screen.getByTestId('input-player-name');
  btnPlay = screen.getByTestId('btn-play');
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.type(inputName, 'teste');
  userEvent.click(btnPlay);

  await screen.findByText(/Trivia/i);
  await waitFor(() => { expect(history.location.pathname).toBe('/game'); });
  btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer);
  userEvent.click(btnIncorrectAnswer[0]);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer);
  userEvent.click(btnIncorrectAnswer[0]);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer);
  userEvent.click(btnIncorrectAnswer[0]);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer);
  userEvent.click(btnIncorrectAnswer[0]);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId(wrongAnswer);
  userEvent.click(btnIncorrectAnswer[0]);
  btnNext = screen.getByTestId('btn-next');
  userEvent.click(btnNext);

  expect(screen.getByTestId('feedback-text').innerHTML).toContain('Could be better...');
  assertions = screen.getByTestId('feedback-total-question');
  score = screen.getByTestId('feedback-total-score');
  expect(score).toBeInTheDocument();
  expect(assertions.innerHTML).toBe('0');
});
