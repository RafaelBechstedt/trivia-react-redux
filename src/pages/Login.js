// import { object } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render() {
    const { email, name } = this.state;
    console.log(this.validateBtn());
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
            // onClick={this.handleBtn}
            disabled={ this.validateBtn() }
          >
            Play
          </button>
        </div>
      </form>
    );
  }
}

export default connect()(Login);
