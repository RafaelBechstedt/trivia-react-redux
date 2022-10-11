import { waitFor } from '@testing-library/react';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

it('', async() => {
  // Acessa o jogo
  const { history } = renderWithRouterAndRedux(<App />);
  let inputEmail = screen.getByTestId("input-gravatar-email");
  let inputName = screen.getByTestId("input-player-name");
  let btnPlay = screen.getByTestId("btn-play");
  expect(btnPlay).toBeDisabled();
  userEvent.clear(inputEmail);
  userEvent.clear(inputName);
  userEvent.type(inputEmail,'teste@teste.com');
  userEvent.type(inputName,'teste');
  expect(btnPlay).not.toBeDisabled();
  userEvent.click(btnPlay);

  // Joga
  await waitFor(() => { expect(history.location.pathname).toBe('/game');});
  await waitFor(() => {expect(screen.getByTestId("question-text")).toBeInTheDocument();});
  let btnCorrectAnswer = screen.getByTestId("correct-answer");
  let btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnCorrectAnswer);
  let btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnIncorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  // Verifica se está na tela de feedback

  await waitFor(() => { expect(history.location.pathname).toBe('/Feedback');})
  expect(screen.getByTestId("feedback-text").innerHTML).toContain('Well Done!');
  let assertions = screen.getByTestId("feedback-total-question");
  let score = screen.getByTestId("feedback-total-score");
  expect(score).toBeInTheDocument();
  expect(assertions.innerHTML).toBe('4');
  
  // Joga novamente
  const btnPlayAgain = screen.getByTestId("btn-play-again");
  userEvent.click(btnPlayAgain);
  inputEmail = screen.getByTestId("input-gravatar-email");
  inputName = screen.getByTestId("input-player-name");
  btnPlay = screen.getByTestId("btn-play");
  userEvent.type(inputEmail,'teste@teste.com');
  userEvent.type(inputName,'teste');
  userEvent.click(btnPlay);

  await waitFor(() => { expect(history.location.pathname).toBe('/game');});
  await waitFor(() => {expect(screen.getByTestId("question-text")).toBeInTheDocument();});
  btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnIncorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnIncorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnIncorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnIncorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);
  btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  userEvent.click(btnIncorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);

  expect(screen.getByTestId("feedback-text").innerHTML).toContain('Could be better...');
  assertions = screen.getByTestId("feedback-total-question");
  score = screen.getByTestId("feedback-total-score");
  expect(score).toBeInTheDocument();
  expect(assertions.innerHTML).toBe('0');
})