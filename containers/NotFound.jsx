import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

class NotFound extends Component {
  render() {
    return (
      <div>
      <p>404 NotFound</p>
      </div>
    );
  }
}

NotFound.propTypes = {
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
)(NotFound);
