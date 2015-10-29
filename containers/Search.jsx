import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    return (
      <div>
      <p>Search</p>
      </div>
    );
  }
}

Search.propTypes = {
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
)(Search);
