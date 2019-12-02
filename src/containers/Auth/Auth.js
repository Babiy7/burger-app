import React, { Component } from "react";
import Input from "../../component/UI/Input/Input";
import Button from "../../component/UI/Button/Button";
import Lock from "../../component/Lock/Lock";
import classes from "./Auth.module.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        email: {
          validation: {
            type: "email",
            required: true
          },
          elementType: "input",
          errorMessage: "Incorect email address",
          elementConfig: {
            type: "email",
            placeholder: "Type your email"
          },
          touched: false,
          value: "",
          valid: false
        },
        password: {
          validation: {
            type: "password",
            required: true
          },
          elementType: "input",
          errorMessage: "Incorect password",
          elementConfig: {
            type: "password",
            placeholder: "Type your password"
          },
          touched: false,
          value: "",
          valid: false
        }
      }
    };
  }

  validation(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.type === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && isValid;
    }
    if (rules.type === "password") {
      isValid = value.length >= 6 && isValid;
    }
    return isValid;
  }

  formHandle = (event, inputType) => {
    const value = event.target.value;
    const updateControls = {
      ...this.state.controls,
      [inputType]: {
        ...this.state.controls[inputType],
        touched: true,
        value: value,
        valid: this.validation(value, this.state.controls[inputType].validation)
      }
    };

    this.setState({
      controls: updateControls
    });
  };

  render() {
    let controls = [];
    for (let elementType in this.state.controls) {
      controls.push({
        id: elementType,
        controls: this.state.controls[elementType]
      });
    }

    return (
      <div className={classes.Auth}>
        <div className={classes.Icon}>
          <h2 className={classes.Title}>Login</h2>
          <Lock width="80px" height="80px" />
        </div>
        <form className={classes.Form}>
          {controls.map(element => {
            return (
              <Input
                key={element.id}
                changed={event => this.formHandle(event, element.id)}
                configuration={element.controls}
                invalid={!element.controls.valid}
              />
            );
          })}
          <Button type="Success"> Login </Button>
        </form>
      </div>
    );
  }
}

export default Auth;
