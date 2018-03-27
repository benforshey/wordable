import React from 'react';
import ErrorMessage from '../ErrorMessage';
import Query from '../Query';
import DescriptionList from '../DescriptionList';

class API extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      err: '',
    };

    this.fetchFromAPI = this.fetchFromAPI.bind(this);
  }

  componentDidMount() {
    this.fetchFromAPI();
  }
  async fetchFromAPI(word = '?random=true') {
    try {
      const response = await fetch(`https://wordable-api-ahojuypdhq.now.sh/words/${word}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
      });

      // NOTE: This is pretty clumsy. Error message text isn't the most descriptive
      // or user-friendly. I'd like to revisit this. Also, clear it away.
      // API limit exceeded, so return early.
      if (response.status === 429) {
        this.setState({ err: response.statusText });
        return;
      }

      const data = await response.json();

      this.setState({ data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.err &&
        <ErrorMessage message={this.state.err} />
        }
        <Query query={this.fetchFromAPI} />
        {this.state.data &&
        <DescriptionList data={this.state.data} query={this.fetchFromAPI} />
        }
      </div>
    );
  }
}

export default API;
