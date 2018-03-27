import React from 'react';
import propTypes from 'prop-types';

// TODO: reset error states.
class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // TODO: use functional setState to ensure a blank query returns a random word.
    // if (!this.state.value) {
    //   this.setState({ value: '?random=true' });
    // }

    this.props.query(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onInput={this.handleInput}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

Query.propTypes = {
  query: propTypes.func.isRequired,
};

export default Query;
