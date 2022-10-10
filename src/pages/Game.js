import React from 'react';
import { shape, func } from 'prop-types';

import Header from '../components/Header';

class Game extends React.Component {
  state = {
    questions: {},
    count: 0,
    loading: true,
    answered: false,
    timer: 30,
  };

  componentDidMount() {
    const SECOND = 1000;
    this.fetchApi();
    setInterval(() => this.decreaseTimer(), SECOND);
  }

  fetchApi = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&token=${token}`,
    );
    const data = await response.json();

    this.setState({
      questions: data,
      loading: false,
    });
  };

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = (array) => {
    let currentIndex = array.length; let
      randomIndex;

    // Enquanto restam elementos para embaralhar.
    while (currentIndex !== 0) {
      // Escolha um elemento restante.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E troque-o com o elemento atual.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  randomAnswers = () => {
    const { questions, count } = this.state;
    const arr = [];
    const question = questions.results[count];
    arr.push(
      ...questions.results[count].incorrect_answers,
    );
    arr.push(
      { answer: question.correct_answer, correct: true },
    );
    const shuffledArray = this.shuffle(arr);

    return shuffledArray;

    // this.setState({
    //   answers: shuffledArray,
    // });
  };

  incrementIndex = (index) => {
    index += 1;
    return index;
  };

  handleClick = () => {
    this.setState({
      answered: true,
    });
    clearInterval(0);
  };

  decreaseTimer = () => {
    this.setState((prev) => ({
      timer: prev.timer - 1,

    }), () => {
      const { timer } = this.state;
      if (timer === 0) {
        this.handleClick();
      }
    });
  };

  render() {
    const { questions, count, loading, answered, timer } = this.state;
    const { history } = this.props;
    const expiredToken = 3;
    let pageGame = '';
    const index = -1;
    if (questions.response_code === expiredToken) {
      localStorage.removeItem('token');
      history.push('/');
    }
    if (!loading && questions.response_code !== expiredToken) {
      this.randomAnswers();
      pageGame = (
        <div>
          <span>{timer}</span>
          <p data-testid="question-category">{ questions.results[count].category }</p>
          <p data-testid="question-text">{ questions.results[count].question }</p>
          <div data-testid="answer-options">
            { this.randomAnswers().map((answer) => (
              answer.correct ? (
                <button
                  type="button"
                  data-testid="correct-answer"
                  id={ answered ? 'correct' : null }
                  key={ answer.answer }
                  onClick={ this.handleClick }
                  disabled={ answered }
                >
                  {answer.answer}
                </button>
              ) : (
                <button
                  type="button"
                  data-testid={ `wrong-answer-${this.incrementIndex(index)}` }
                  id={ answered ? 'incorrect' : null }
                  key={ answer }
                  onClick={ this.handleClick }
                  disabled={ answered }
                >
                  {answer}
                </button>
              )
            ))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header />
        { pageGame }
      </div>
    );
  }
}

Game.propTypes = {
  history: shape({ push: func }),
}.isRequired;

export default Game;
