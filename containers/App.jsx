import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tabname){
    this.props.pushState(null, `/${tabname}`);
  }

  render() {
    let styles = {
      main: {
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 24,
        paddingRight: 24,
        height: 720,
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '100%'
      }
    };

    return (
      <div>
        <Header onSelectTab={this.selectTab} />
        <div style={styles.main}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
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
  {pushState}
)(App);
