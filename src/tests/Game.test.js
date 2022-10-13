import { waitFor, act, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { fetch } from './helpers/mocks/fetch';
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

it('', async() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);

    // Acessa o jogo
  const { history } = renderWithRouterAndRedux(<App />)

  let inputEmail = screen.getByTestId("input-gravatar-email");
  let inputName = screen.getByTestId("input-player-name");
  let btnPlay = screen.getByTestId("btn-play");
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.type(inputName, 'teste');
  userEvent.click(btnPlay)

  await waitFor(() => expect(screen.getByText("In quantum physics, which of these theorised sub-atomic particles has yet to be observed?")).toBeInTheDocument());

  const btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];

  expect(btnIncorrectAnswer.innerHTML).not.toBe('Z boson');
  
})

it('', async() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);

    // Acessa o jogo
  const { history } = renderWithRouterAndRedux(<App />)

  let inputEmail = screen.getByTestId("input-gravatar-email");
  let inputName = screen.getByTestId("input-player-name");
  let btnPlay = screen.getByTestId("btn-play");
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.type(inputName, 'teste');
  userEvent.click(btnPlay)

  await waitFor(() => expect(screen.getByText("In quantum physics, which of these theorised sub-atomic particles has yet to be observed?")).toBeInTheDocument());
  
  let btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  let btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);

  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);

  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  userEvent.click(btnNext);

  const score = screen.getByTestId('header-score');
  expect(score.innerHTML).toBe('210');
})

jest.setTimeout(50000);
it('', async() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);

    // Acessa o jogo
  const { history } = renderWithRouterAndRedux(<App />)

  let inputEmail = screen.getByTestId("input-gravatar-email");
  let inputName = screen.getByTestId("input-player-name");
  let btnPlay = screen.getByTestId("btn-play");
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.type(inputName, 'teste');
  userEvent.click(btnPlay)

  await waitFor(() => expect(screen.getByText("In quantum physics, which of these theorised sub-atomic particles has yet to be observed?")).toBeInTheDocument());
  
  let timer = screen.getByTestId('question-timer');
  expect(timer.innerHTML).toBe('30')
  
  
  timer = await screen.findByText('1', { exact: true }, { timeout: 50000 });
  timer = await screen.findByText('0', { exact: true }, { timeout: 2000 });
  timer = await screen.findByText('0', { exact: true }, { timeout: 2000 });
  let btnNext = await screen.findByText('Next', { exact: true }, { timeout: 1000 });
  expect(btnNext).toBeInTheDocument();
})

it('', async() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);

    // Acessa o jogo
  const { history } = renderWithRouterAndRedux(<App />)

  let inputEmail = screen.getByTestId("input-gravatar-email");
  let inputName = screen.getByTestId("input-player-name");
  let btnPlay = screen.getByTestId("btn-play");
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.type(inputName, 'teste');
  userEvent.click(btnPlay)

  await waitFor(() => expect(screen.getByText("In quantum physics, which of these theorised sub-atomic particles has yet to be observed?")).toBeInTheDocument());
  
  let btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  let btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);

  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
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

  btnCorrectAnswer = screen.getByTestId("correct-answer");
  userEvent.click(btnCorrectAnswer);
  btnNext = screen.getByTestId("btn-next");
  userEvent.click(btnNext);

  await screen.findByText(/Play Again/i);
  expect(history.location.pathname).toBe('/Feedback');
})