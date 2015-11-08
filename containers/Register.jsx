import React, { Component, PropTypes } from "react";
import {bindActionCreators} from 'redux';
import { registerMacInfo} from '../actions/index';
import { connect } from 'react-redux';

import mui, {
             RaisedButton,
             Dialog,
             FlatButton,
             TextField,
             Paper
             } from 'material-ui';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      text:  ''
    };

    this.handleRegisterButton = this.handleRegisterButton.bind(this);
    this.handleCustomDialogCancel = this.handleCustomDialogCancel.bind(this);
    this.handleCustomDialogSubmit = this.handleCustomDialogSubmit.bind(this);
    this.handleTextFieldChange= this.handleTextFieldChange.bind(this);
  }


  handleRegisterButton() {
    this.refs.customDialog.show();
  }

  handleCustomDialogCancel() {
    this.refs.customDialog.dismiss();
  }

  handleCustomDialogSubmit() {
    let { dispatch } = this.props;

    dispatch(registerMacInfo(this.state.text));
    this.setState({ text: ""})
    this.refs.customDialog.dismiss();
  }

  handleError(err) {
    this.refs.errorDialog.show();
    console.log("test:" + err);
  }

  handleErrorDialogCancel() {
    this.refs.customDialog.dismiss();
  }

  handleTextFieldChange(e){
    this.setState({ text: e.target.value })
  }

  render() {
    let styles = {
      root: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 24,
        overflow: 'hidden'
      },
      main: {
        position: 'fixed',
        top: 100,
        right: 0,
        zIndex: 4,
        width: '100%'
      },
      container: {
        textAlign: 'center',
        marginBottom: '16px'
      },
      group: {
        float: 'right',
        width: '50%'
      },
      textfield: {
        width: '80%'
      },
      registerButton: {
        marginRight: 20
      },
      templateButton: {
      }
    };

    let customActions = [
      <FlatButton
        key={1}
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleCustomDialogCancel} />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        onTouchTap={this.handleCustomDialogSubmit} />
    ];

    let errorActions = [
      <FlatButton
        key={1}
        label="Confirm"
        secondary={true}
        onTouchTap={this.handleErrorDialogCancel} />
    ];

    return (
      <div style={styles.main}>
        <Paper style={styles.root}>
          <TextField
             style={styles.textfield}
             rows={10}
             rowsMax={20}
             hintText="Please paste excel template here!"
             value={this.state.text}
             multiLine={true}
             onChange={this.handleTextFieldChange}/><br/>
        </Paper>
        <div style={styles.group}>
        <div style={styles.container}>
          <RaisedButton
             style={styles.registerButton}
             label="Register"
             onTouchTap={this.handleRegisterButton} />
          <RaisedButton
             style={styles.templateButton}
             label="Display Template" />
        </div>
        </div>
        <Dialog
            ref="customDialog"
            title="Are you sure to register MAC info ?"
            actions={customActions}
            modal={this.state.modal}>
            The actions in this window were passed in as an array of react objects.
        </Dialog>
        <Dialog
            ref="errorDialog"
            title="Invalid format data is submitted !!"
            actions={errorActions}
            modal={this.state.modal}>
        </Dialog>
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

// function mapDispatchToProps(dispatch) {
//   return {
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Register);
