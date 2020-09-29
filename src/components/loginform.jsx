import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

function SigninForm(props) {
  return (
    <div>
      {/* <Form>
        <Form.Field> */}
      <label htmlFor="username">Enter Your Name: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={props.username}
        onChange={props.handleinputChange}
      ></input>
      {/* </Form.Field> */}
      <Button
        as={Link}
        to="/jokes"
        type="submit"
        // onSubmit ={props.displayMainPage}
        // onClick={props.displayMainPage}
      >
        Submit
      </Button>
      {/* </Form> */}
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
