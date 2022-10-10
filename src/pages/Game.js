import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

class Game extends React.Component {
  state = {
    questions: {},
    count: 0,
    loading: true,
    answers: [],
  };

  componentDidMount() {
    this.fetchApi();
    localStorage.removeItem('token');
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

    this.setState({
      answers: shuffledArray,
    });
  };

  render() {
    const { questions, count, loading, answers } = this.state;
    const expiredToken = 3;
    let pageGame = '';
    let index = 0;
    if (!loading) {
      this.randomAnswers();
      pageGame = (
        <div>
          <p data-testid="question-category">{ questions.results[count].category }</p>
          <p data-testid="question-text">{ questions.results[count].question }</p>
          <div data-testid="answer-options">
            { answers.map((answer) => (
              answer.correct ? (
                <button
                  type="button"
                  data-testid="correct-answer"
                  id="correct"
                >
                  {answer.answer}
                </button>
              ) : (
                <button
                  type="button"
                  data-testid={ `wrong-answer-${index}` }
                  id="incorrect"
                >
                  {answer.answer}
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
        { (questions.response_code === expiredToken) && <Redirect to="/" /> }
        { pageGame }
      </div>
    );
  }
}

export default Game;
