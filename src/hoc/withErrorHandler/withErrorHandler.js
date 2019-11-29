import React from "react";
import Modal from "../../component/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };

      this.requestInterceptors = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      this.responseInterceptors = axios.interceptors.response.use(
        response => {
          return response;
        },
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorModalHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          <Modal show={this.state.error} unShow={this.errorModalHandler}>
            {this.state.error ? (
              <h3 style={{ color: "red", textAlign: "center" }}>
                {this.state.error.message}
              </h3>
            ) : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptors);
      axios.interceptors.response.eject(this.responseInterceptors);
    }
  };
};

export default withErrorHandler;
