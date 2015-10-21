import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';


class Footer extends Component {
  render() {

    let styles = {
      footerStyle: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#212121'
      },
      footerText: {
        color: 'lightgray'
      },
      footerLink: {
        color: 'white',
        textDecoration: 'none'
      }
    }
    return (
      <footer className="footer">
      <div style={styles.footerStyle}>
        <p style={styles.footerText}>Mackun web is maintained on <a style={styles.footerLink} href="https://github.com/takanabe/mackun2-web"> https://github.com/takanabe/mackun2-web</a>. If there are any problems please access the url shown above modify the codes.
        </p>
      </div>
      </footer>
    );
  }
}


export default Footer;
