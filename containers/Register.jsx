import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

class Register extends Component {
  render() {
    return (
      <div>
      <p>Register</p>
      </div>
    );
  }
}

Register.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
