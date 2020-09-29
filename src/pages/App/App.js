import React from "react";
import "./App.css";
import Content from "../../components/content";
import { getContent } from "../../services/getcontent";
import { Route, Switch } from "react-router-dom";
import SigninForm from "../../components/loginform";

class App extends React.Component {
  state = {
    username: "",
    jokes: [],
    // jokes: null,
    // icon_url: null,
    // created_at: null,
  };

  async componentDidMount() {
    const data = await getContent();
    console.log(data);
    const joke = {
      value: data.value,
      icon_url: data.icon_url,
      created_at: data.created_at,
    };
    this.setState({
      jokes: [...this.state.jokes, joke],
    });
    // this.setState({
    //   jokes: data.value,
    //   icon_url: data.icon_url,
    //   created_at: data.created_at,
    // });
  }

  handleinputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleAdd = () =>
  //   this.setState((prevState) => ({
  //     items: users.slice(0, prevState.items.length + 1),
  //   }));

  // handleRemove = () =>
  //   this.setState((prevState) => ({ items: prevState.items.slice(0, -1) }));

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
            render={() => <Content {...this.state} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
