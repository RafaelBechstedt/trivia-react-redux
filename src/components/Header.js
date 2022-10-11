import React from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, email, score } = this.props;
    const hash = md5(email).toString();
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${hash}` } alt={ name } data-testid="header-profile-picture" />
        <h1 data-testid="header-player-name">
          {name}
        </h1>
        <span data-testid="header-score">
          {score}
        </span>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
  score: state.player.score,
});

Header.propTypes = {
  name: string,
  email: string,
  score: number,
}.isRequired;

export default connect(mapStateToProps)(Header);
