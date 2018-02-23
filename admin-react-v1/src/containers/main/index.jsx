import React, { PropTypes } from 'react';

//material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';

//theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import themeDefault from '../../styles/theme';

//svg-icons
import Assessment from 'material-ui/svg-icons/action/assessment';
import Web from 'material-ui/svg-icons/av/web';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';

//components
import Header from '../../componentes/header';
import LeftDrawer from '../../componentes/left-drawer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true
    };

    this.menu = [
      { text: 'Dashboard', icon: <Assessment />, link: '/dashboard' },
      { text: 'Telas', icon: <Web />, link: '/screens' },
      { text: 'Destaques', icon: <GridOn />, link: '/highlights' }
    ]
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  componentDidMount() {
    this.setState({ navDrawerOpen: this.props.width === LARGE });
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 20px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(themeDefault)}>
        <div>
          <Header styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />

          <LeftDrawer navDrawerOpen={navDrawerOpen}
            menus={this.menu}
            username="Olá Admin" />

          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);