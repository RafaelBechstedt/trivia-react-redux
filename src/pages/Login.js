import { func } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    name: '',
    // image: '',
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateBtn = () => {
    const { email, name } = this.state;
    return (email.length === 0 || name.length === 0);
  };

  handleBtn = async () => {
    console.log('oi')
    const { addToken, history } = this.props
    await addToken()
    // localStorage.setItem({'token', })
    // history.push()
  }

  render() {
    const { email, name } = this.state;
    return (
      <form
        style={{
          width: 350,
          margin: '40px auto',
        }}
      >
        <h2 className="text-center">SC-Login</h2>
        <div className="form-group">
          <input
            value={email}
            placeholder="Email"
            name="email"
            className="form-control"
            type="email"
            data-testid="input-gravatar-email"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <input
            value={name}
            placeholder="Nome"
            className="form-control"
            type="text"
            data-testid="input-player-name"
            onChange={this.handleInput}
            name="name"
          />
        </div>
        <div className="form-group">
          <button
            type="sumit"
            className="btn btn-primary btn-block"
            data-testid="btn-play"
            onClick={this.handleBtn}
            disabled={this.validateBtn()}
          >
            Play
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  addToken: func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addToken: () => dispatch(fetchApi()),
})

export default connect(null, mapDispatchToProps)(Login);
