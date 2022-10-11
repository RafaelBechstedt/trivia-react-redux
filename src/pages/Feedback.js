import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { correct } = this.props;
    let feedbackText = null;
    const checkNumber = 3;
    if (correct < checkNumber) {
      feedbackText = <p data-testid="feedback-text">Could be better...</p>;
    }
    if (correct >= checkNumber) {
      feedbackText = <p data-testid="feedback-text">Well Done!</p>;
    }

    return (
      <div>
        <Header />
        {feedbackText}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correct: state.player.correct,
});

Feedback.propTypes = {
  correct: number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
