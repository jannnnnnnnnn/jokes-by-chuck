import React, { useEffect } from "react";
import { Button, Image, List, Transition } from "semantic-ui-react";

function Content(props) {
  const { username, jokes } = props;
  const welcomeMsg = React.createRef();
  console.log(jokes);
  // $('.abc').transition("fly left")
  const listofJokes = [];
  for (let i = 0; i < jokes.length; i++) {
    listofJokes.push(<li key={i}>{jokes.value}</li>);
  }
  // useEffect(() => {
  //   welcomeMsg.current.transition("fly left");
  //   // document.getElementById('cc')
  // }, []);
  return (
    <div>
      <p ref={welcomeMsg} id="cc" className="intro">
        Welcome {username}
      </p>
      <hr />
      {/* <Button.Group>
        <Button
          disabled={items.length === 0}
          icon="minus"
          onClick={this.handleRemove}
        />
        <Button
          disabled={items.length === users.length}
          icon="plus"
          onClick={this.handleAdd}
        />
      </Button.Group>

      <Transition.Group
        as={List}
        duration={200}
        divided
        size="huge"
        verticalAlign="middle"
      >
        {items.map((item) => (
          <List.Item key={item}>
            <Image avatar src={`/images/avatar/small/${item}.jpg`} />
            <List.Content header={_.startCase(item)} />
          </List.Item>
        ))}
      </Transition.Group> */}
      <img src={"test"} alt="image" />
      <p>{listofJokes}</p>
      <p>Created on: {jokes}</p>
    </div>
  );
}

export default Content;
