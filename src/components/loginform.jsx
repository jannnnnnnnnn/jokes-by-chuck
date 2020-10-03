import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

function SigninForm(props) {
  return (
    <div>
      <label htmlFor="username">Enter Your Name: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={props.username}
        onChange={props.handleinputChange}
      ></input>
      <Button as={Link} to="/jokes" type="submit">
        Submit
      </Button>
    </div>
  );
}

SigninForm.propTypes = {
  name: PropTypes.string,
  handleinputChange: PropTypes.func.isRequired,
};

SigninForm.defaultProps = {
  name: "Enter a name",
};
export default SigninForm;
