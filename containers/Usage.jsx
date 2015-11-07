import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import mui, {
             Paper
             } from 'material-ui';

class Usage extends Component {

  render() {
    let styles = {
      root: {
        width: '80%',
        height: 400,
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
      title: {
        marginLeft: 20,
        textAlign: 'left',
      },
      text: {
        textAlign: 'left',
        fontSize: 15,
      }
    };


    return (
      <div style={styles.main}>
        <Paper style={styles.root}>
          <h1 style={styles.title}> 基本機能</h1>
            <ul>
              <li style={styles.text} >新規MACアドレスの追加はRegistrationから</li>
              <li style={styles.text} >既存MACアドレスの検索はSearchから</li>
              <li style={styles.text} >既存MACアドレスの変更はSearchから</li>
              <li style={styles.text} >既存MACアドレスの削除はSearchから</li>
            </ul>
            <br/>
          <h1 style={styles.title}> 困ったとき</h1>
            <ul>
              <li style={styles.text} >Githubにあるコードを読む</li>
              <li style={styles.text} >開発者に機能改善を依頼する</li>
            </ul>
            <br/>
          <h1 style={styles.title}> 未実装部分</h1>
            <ul>
              <li style={styles.text} >SearchからのMACアドレス一括削除(DELETE CHECKED ROWSボタン)</li>
            </ul>
        </Paper>
      </div>
    );
  }
}

Usage.propTypes = {
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
)(Usage);
