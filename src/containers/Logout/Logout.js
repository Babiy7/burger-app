import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ActionCreator from "../../store/actions/";

const Logout = props => {
  useEffect(() => {
    props.logout();
  });

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(ActionCreator.logout())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
