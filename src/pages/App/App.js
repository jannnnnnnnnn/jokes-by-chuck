import React from "react";
import "./App.css";
import Content from "../../components/content";
import { getContent } from "../../services/getcontent";
import { Route, Switch } from "react-router-dom";
import SigninForm from "../../components/loginform";

class App extends React.Component {
  state = {
    username: "",
    // jokes: [],
    joke: {
      value: null,
      icon_url: null,
      created_at: null,
    },
  };

  async componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke = async () => {
    const data = await getContent();
    console.log(data);
    const joke = {
      value: data.value,
      icon_url: data.icon_url,
      created_at: data.created_at,
    };
    this.setState({
      joke,
    });
  };

  handleinputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header>Chuck's Jokes</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <SigninForm
                username={this.state.username}
                handleinputChange={this.handleinputChange}
              />
            )}
          />
          <Route
            exact
            path="/jokes"
            render={() => (
              <Content {...this.state} fetchJoke={this.fetchJoke} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
