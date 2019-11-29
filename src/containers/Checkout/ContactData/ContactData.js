import React, {
  useState
  // useRef,
} from "react";
import classes from "./ContactData.module.css";
import Button from "../../../component/UI/Button/Button";
import Spinner from "../../../component/UI/Spinner/Spinner";
import Input from "../../../component/UI/Input/Input";
import * as ActionCreator from "../../../store/actions/";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Axios from "../../../axios-orders";

const ContactData = props => {
  // const ref = useRef();
  const [state, setState] = useState({
    orderForm: {
      name: {
        validation: {
          required: true,
          errorMessage: ""
        },
        elementType: "input",
        name: "name",
        elementConfig: {
          type: "text",
          placeholder: "Type your name"
        },
        touched: false,
        value: "",
        valid: false
      },
      address: {
        validation: {
          required: true,
          errorMessage: ""
        },
        elementType: "input",
        name: "address",
        elementConfig: {
          type: "text",
          placeholder: "Type your address"
        },
        touched: false,
        value: "",
        valid: false
      },
      email: {
        validation: {
          type: "email",
          required: true,
          errorMessage: "Incorect email address"
        },
        elementType: "input",
        name: "email",
        elementConfig: {
          type: "email",
          placeholder: "Type your email"
        },
        touched: false,
        value: "",
        valid: false
      },
      delivery: {
        elementType: "select",
        name: "delivery",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "fastest",
        valid: true
      }
    },
    isValidForm: false
  });

  // useEffect(() => {
  //   if (!state.loading) {
  //     ref.current.focus();
  //   }
  // });

  function validation(value, rules) {
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
    return isValid;
  }

  function formSubmitHandle(event, inputType) {
    const updatedForm = {
      ...state.orderForm
    };
    const updatedType = { ...updatedForm[inputType] };
    updatedType.value = event.target.value;
    updatedType.valid = validation(updatedType.value, updatedType.validation);
    updatedType.touched = true;
    updatedForm[inputType] = updatedType;

    let isValidForm = true;

    for (let typeOfForm in updatedForm) {
      isValidForm = updatedForm[typeOfForm].valid && isValidForm;
    }
    setState({
      orderForm: updatedForm,
      isValidForm: isValidForm
    });
  }

  if (props.success) {
    props.history.push("/");
  }

  function sendDataOnServer(e) {
    e.preventDefault();

    const orderForm = { ...state.orderForm };
    let currentdate = new Date();
    let datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    let form = {};

    for (let key in orderForm) {
      form[key] = orderForm[key].value;
    }

    const order = {
      burger: props.ingredients,
      ...form,
      price: props.price,
      date: datetime
    };
    props.orderPush(order);
  }

  let formElementArray = [];

  for (let key in state.orderForm) {
    formElementArray.push({
      id: key,
      configuration: state.orderForm[key]
    });
  }

  let form = (
    <form className={classes.Form}>
      {formElementArray.map(element => {
        return (
          <Input
            key={element.id}
            changed={event =>
              formSubmitHandle(event, element.configuration.name)
            }
            configuration={element.configuration}
            invalid={!element.configuration.valid}
          />
        );
      })}

      <div style={{ width: "100%" }}>
        <Button
          clicked={sendDataOnServer}
          disabled={!state.isValidForm}
          type="Success"
        >
          Order
        </Button>
      </div>
    </form>
  );

  if (props.loading) {
    form = <Spinner />;
  }

  return (
    <div className={classes.ContactData}>
      <h4 style={{ textAlign: "center" }}>Type your data please!</h4>
      {form}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.order.ingredients,
    price: state.order.basePrice,
    success: state.order.success,
    loading: state.order.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    orderPush: orderData => dispatch(ActionCreator.orderStart(orderData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, Axios));
