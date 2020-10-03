import React, { useEffect } from "react";
import { Button, Image, List, Transition } from "semantic-ui-react";

function Content(props) {
  // const { username, joke } = props;
  const welcomeMsg = React.createRef();
  // console.log(joke);

  return (
    <div>
      <p ref={welcomeMsg} id="cc" className="intro">
        Welcome {props.username}
      </p>
      <hr />
      <img src={props.joke.icon_url}></img>
      <p>{props.joke.value}</p>
      <p>Created on: {props.joke.created_at}</p>
      <button onClick={props.fetchJoke}>Get A New Joke</button>
    </div>
  );
}

export default Content;
