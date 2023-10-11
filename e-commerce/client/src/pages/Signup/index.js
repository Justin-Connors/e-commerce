import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import validator from "validator";
import { TextField, Button, Typography } from "@mui/material";

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);
  const [blockSubmit, setBlockSubmit] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    const { firstName, lastName, email, password } = formState;
    const isEmail = validator.isEmail(email);
    const isPassword = validator.isStrongPassword(password, {
      min: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    if (firstName && lastName && isEmail && isPassword) {
      setBlockSubmit(false);
    } else {
      setBlockSubmit(true);
    }
  }, [formState]);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const mutationResponse = addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="First Name"
        name="firstName"
        type="firstName"
        variant="outlined"
        value={formState.firstName}
        onInput={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        type="lastName"
        variant="outlined"
        value={formState.lastName}
        onInput={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        value={formState.email}
        onInput={handleChange}
      />
      <TextField
        label="Password"
        name="password"
        variant="outlined"
        type="password"
        helperText="Password must be at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"
        value={formState.password}
        onInput={handleChange}
      />
      <Button
        variant="outlined"
        color="inherit"
        type="submit"
        disabled={blockSubmit}
      >
        Sign up
      </Button>
    </form>
  );
}

export default Signup;
