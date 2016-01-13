import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';


class Footer extends Component {
  render() {

    let styles = {
      footerStyle: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        paddingTop: 'auto',
        paddingBottom: 'auto',
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#212121'
      },
      footerText: {
        paddingTop: 15,
        paddingBottom: 15,
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
        <p style={styles.footerText}>macauth web is maintained on <a style={styles.footerLink} href="https://github.com/takanabe/macauth-web"> https://github.com/takanabe/macauth-web</a>. If there are any problems please access the url to modify codes or confirm your requests.
        </p>
      </div>
      </footer>
    );
  }
}


export default Footer;
