import React, { Component } from "react";

export default class Joke extends Component {
  state = {
    jokes: [],
    loading: true,
  };

  componentDidMount() {
    //fetch joke
    this.fetchJokeFromJokeAPI();
  }

  fetchJokeFromJokeAPI = () => {
    this.setState({ loading: true });
    const category = this.props.match.params.category;
    const url = ` https://sv443.net/jokeapi/v2/joke/${category}?type=single&amount=10`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          jokes: result.jokes,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          message: "Ah, something went wrong",
        });
      });
  };

  render() {
    const { jokes, loading } = this.state;
    return (
      <div style={{ justifyContent: "center", padding: 50 }}>
        <h3> {this.props.match.params.category} Jokes</h3>
        {loading && <p>Loading...</p>}
        {jokes.map((joke, idx) => (
          <div key={idx}>
            <p>
              {idx + 1}. {joke.joke}
            </p>
          </div>
        ))}

        <button onClick={this.fetchJokeFromJokeAPI}>Get New Jokes</button>
      </div>
    );
  }
}
