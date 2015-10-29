import React, { Component, PropTypes } from "react";
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
      modal: false
    };
    this.handleRegisterButton = this.handleRegisterButton.bind(this);
    this.handleCustomDialogCancel = this.handleCustomDialogCancel.bind(this);
    this.handleCustomDialogSubmit = this.handleCustomDialogSubmit.bind(this);
  }

  handleRegisterButton() {
    this.refs.customDialog.show();
  }

  handleCustomDialogCancel() {
    this.refs.customDialog.dismiss();
  }

  handleCustomDialogSubmit() {
    this.refs.customDialog.dismiss();
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
      },
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

    return (
      <div style={styles.main}>
        <Paper style={styles.root}>
          <TextField
             style={styles.textfield}
             rows= '10'
             hintText="Please paste excel template here !"
             multiLine={true} /><br/>
        </Paper>
        <div style={styles.group}>
        <div style={styles.container}>
          <RaisedButton
             style={styles.registerButton}
             label="Register"
             onTouchTap={this.handleRegisterButton} />
          <RaisedButton
             style={styles.templateButton}
             label="Display Template"
              />
        </div>
        </div>
        <Dialog
            ref="customDialog"
            title="Are you sure to register following MAC info ?"
            actions={customActions}
            modal={this.state.modal}>
            The actions in this window were passed in as an array of react objects.
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

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
