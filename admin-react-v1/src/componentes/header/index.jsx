import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';

// styles
import stylesComponent from './styles';
import globalStyles from '../../styles/global';

class Header extends React.Component {

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;

    return (
      <div>
        <AppBar
          style={{ ...styles, ...stylesComponent.appBar }}
          iconElementLeft={
            <IconButton style={stylesComponent.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={stylesComponent.iconMenu.color} />
            </IconButton>
          }
          iconElementRight={
            <div style={stylesComponent.iconsRightContainer}>
            </div>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;