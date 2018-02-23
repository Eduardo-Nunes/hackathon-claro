import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';

import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';


import styles from './styles.js';
import globalStyles from '../../styles/global';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          Scanner de Loja
        </div>
        <div style={styles.avatar.div}>
          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={globalStyles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;