import React, { PropTypes, Component } from 'react';
import mui, {AppBar,
             EnhancedButton,
             Styles,
             Tab,
             Tabs,
             Paper } from 'material-ui';

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const { Colors, Spacing, Typography } = Styles;
const DefaultRawTheme = Styles.LightRawTheme;

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleTab = this.handleTab.bind(this);
  }

  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }

  getChildContext(){
    return {  muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)};
  }

  getTabName(tab){
    return tab.props.name;
  }

  handleTab(tab){
    this.props.onSelectTab(this.getTabName(tab));
  }

  render() {

    let styles = {
      root: {
        backgroundColor: Colors.cyan500,
        position: 'fixed',
        height: 64,
        top: 0,
        right: 0,
        zIndex: 4,
        width: '100%'
      },
      span: {
        color: Colors.white,
        fontWeight: Typography.fontWeightLight,
        left: 45,
        top: 22,
        position: 'absolute',
        fontSize: 26
      },
      container: {
        position: 'absolute',
        right: (Spacing.desktopGutter/2) + 48,
        bottom: 0
      },
      tabs: {
        width: 425,
        bottom:0
      },
      tab: {
        height: 64
      }
    };

    let homeIcon = (
      <EnhancedButton
        linkButton={true}
        href="/">
        <span style={styles.span}>MAC Auth</span>
      </EnhancedButton>)

    return (
      <header className="header">
        <Paper
          zDepth={0}
          rounded={false}
          style={styles.root}>
          {homeIcon}
          <div style={styles.container}>
            <Tabs
              style={styles.tabs}
              >
              <Tab
                onActive={this.handleTab}
                label="Registration"
                style={styles.tab}
                name ="registration" />
              <Tab
                onActive={this.handleTab}
                label="Search"
                style={styles.tab}
                name ="search"/>
              <Tab
                onActive={this.handleTab}
                label="Usage"
                style={styles.tab}
                name ="usage"/>
            </Tabs>
          </div>
        </Paper>
      </header>
    );
  }
}

export default Header;
