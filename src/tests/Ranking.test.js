import { waitFor, act, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { fetch } from '../../cypress/mocks/fetch';
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

/*
console.error
    Warning: The current testing environment is not configured to support act(...)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at isConcurrentActEnvironment (node_modules/react-dom/cjs/react-dom.development.js:25260:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27559:12)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at Object.enqueueSetState (node_modules/react-dom/cjs/react-dom.development.js:14067:7)
      at Router.Object.<anonymous>.Component.setState (node_modules/react/cjs/react.development.js:354:16)
*/

it('', async () => {
  // jest.spyOn(global, 'fetch').mockImplementation(fetch);

  // // Acessa o jogo
  // const { history } = renderWithRouterAndRedux(<App />)

  // let inputEmail = screen.getByTestId("input-gravatar-email");
  // let inputName = screen.getByTestId("input-player-name");
  // let btnPlay = screen.getByTestId("btn-play");
  // expect(btnPlay).toBeDisabled();
  // userEvent.clear(inputEmail);
  // userEvent.clear(inputName);
  // userEvent.type(inputEmail, 'teste@teste.com');
  // userEvent.type(inputName, 'teste');
  // expect(btnPlay).not.toBeDisabled();
  // userEvent.click(btnPlay)

  // // Joga
  // await act(async () => await waitFor(() => expect(history.location.pathname).toBe('/game')))
  // await waitFor(() => expect(screen.getByText("The Republic of Malta is the smallest microstate worldwide.")).toBeInTheDocument());
  // let btnCorrectAnswer = screen.getByTestId("correct-answer");
  // expect(btnCorrectAnswer).toHaveTextContent('False');
  // let btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  // userEvent.click(btnCorrectAnswer);
  // let btnNext = screen.getByTestId("btn-next");
  // userEvent.click(btnNext);
  // btnCorrectAnswer = screen.getByTestId("correct-answer");
  // userEvent.click(btnCorrectAnswer);
  // btnNext = screen.getByTestId("btn-next");
  // userEvent.click(btnNext);
  // btnIncorrectAnswer = screen.getAllByTestId("wrong-answer-0")[0];
  // userEvent.click(btnIncorrectAnswer);
  // btnNext = screen.getByTestId("btn-next");
  // userEvent.click(btnNext);
  // btnCorrectAnswer = screen.getByTestId("correct-answer");
  // userEvent.click(btnCorrectAnswer);
  // btnNext = screen.getByTestId("btn-next");
  // userEvent.click(btnNext);
  // btnCorrectAnswer = screen.getByTestId("correct-answer");
  // userEvent.click(btnCorrectAnswer);
  // btnNext = screen.getByTestId("btn-next");
  // userEvent.click(btnNext);

  // // Verifica se está na tela de feedback
  // await waitFor(() => expect(history.location.pathname).toBe('/Feedback'));
  // expect(screen.getByTestId("feedback-text").innerHTML).toContain('Well Done!');
  // let assertions = screen.getByTestId("feedback-total-question");
  // let score = screen.getByTestId("feedback-total-score");
  // expect(score).toBeInTheDocument();
  // expect(assertions.innerHTML).toBe('4');

})

it('', () => {
  localStorage.clear();

  jest.clearAllMocks();

  const ranking = [{ "name": "Teste", "score": 39 }, { "name": "Teste", "score": 660 },{ "name": "Teste", "score": 110 }, { "name": "Teste", "score": 110 }];

  localStorage.setItem('ranking', JSON.stringify(ranking));

  const INITIAL_STATE = {
    player: {
      email: 'leokepler@gmail.com',
      name: 'Leonardo Kepler',
      score: 110,
      assertions: 5
    }
  }
  renderWithRouterAndRedux(<App />, INITIAL_STATE, '/ranking')
  const playerName = screen.getByTestId("player-name-0");
  const playerScore1 = screen.getByTestId("player-score-0");
  const playerScore2 = screen.getByTestId("player-score-1");
  const playerScore3 = screen.getByTestId("player-score-2");
  const playerScore4 = screen.getByTestId("player-score-3");

  expect(playerName).toHaveTextContent('Teste');
  expect(playerScore1).toHaveTextContent(660);
  expect(playerScore2).toHaveTextContent(110);
  expect(playerScore3).toHaveTextContent(110);
  expect(playerScore4).toHaveTextContent(39);
})