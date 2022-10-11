import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, func } from 'prop-types';

class Ranking extends Component {
  // https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
  orderingRanking = (a, b) => {
    const bBig = -1;
    if (a.score < b.score) return 1;
    if (a.score > b.score) return bBig;
    return 0;
  };

  getRankingFromStorage = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    if (!ranking) {
      const { history } = this.props;
      history.push('/');
    } else {
      ranking.sort(this.orderingRanking);
      return ranking;
    }
  };

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Link to="/" data-testid="btn-go-home">Login</Link>
        {this.getRankingFromStorage().map((player, index) => (
          <div key={ index }>
            <p data-testid={ `player-name-${index}` }>{player.name}</p>
            <p data-testid={ `player-score-${index}` }>{player.score}</p>
          </div>
        ))}
      </div>
    );
  }
}

Ranking.propTypes = {
  history: shape({
    push: func,
  }),
}.isRequired;

export default Ranking;
