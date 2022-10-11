import { func, shape } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    name: '',
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateBtn = () => {
    const { email, name } = this.state;
    return email.length === 0 || name.length === 0;
  };

  fetchApi = async () => {
    const response = await fetch(
      'https://opentdb.com/api_token.php?command=request',
    );
    const data = await response.json();
    return data.token;
  };

  handleBtn = async (event) => {
    event.preventDefault();
    const token = await this.fetchApi();
    const score = 0;
    const assertions = 0;
    const { history, setUser } = this.props;
    const { name, email } = this.state;
    setUser({
      name,
      email,
      score,
      assertions,
    });
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { email, name } = this.state;
    const { history } = this.props;
    return (
      <form
        style={ {
          width: 350,
          margin: '40px auto',
        } }
      >
        <h2 className="text-center">SC-Login</h2>
        <div className="form-group">
          <input
            value={ email }
            placeholder="Email"
            name="email"
            className="form-control"
            type="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleInput }
          />
        </div>
        <div className="form-group">
          <input
            value={ name }
            placeholder="Nome"
            className="form-control"
            type="text"
            data-testid="input-player-name"
            onChange={ this.handleInput }
            name="name"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            data-testid="btn-play"
            onClick={ this.handleBtn }
            disabled={ this.validateBtn() }
          >
            Play
          </button>
          <button
            type="button"
            className="btn btn-primary btn-block"
            data-testid="btn-settings"
            onClick={ () => { history.push('/settings'); } }
          >
            Settings
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  setUser: func,
  history: shape({
    push: func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(addUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
