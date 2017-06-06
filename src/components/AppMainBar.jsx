import React from 'react';
import * as constants from '../constants';

// material-ui components
import FlatButton from 'material-ui/lib/flat-button';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';

const AppMainBar = ({auth, onLogoutUser, onAttemptLogin, onResetData}) => {
  let iconElementRight = null;

  switch (auth.currently) {
    case constants.LOGGED_IN:
      iconElementRight = (
        <IconMenu
          iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText={`Signed in as ` + auth.displayName} disabled />
          <MenuItem primaryText={`Reset to Default`} onTouchTap={onResetData} />
          <Divider />
          <MenuItem primaryText={`Log out`} onTouchTap={onLogoutUser} />
        </IconMenu>
      );
      break;

    case constants.AWAITING_AUTH_RESPONSE:
      iconElementRight = (
        <FlatButton label={`authenticating...`} icon={ <i className="fa fa-spinner fa-spin"></i> } />
      );
      break;

    default:
      iconElementRight = (
        <FlatButton label={`Log in`} onClick={onAttemptLogin} />
      );
      break;
  }

  return (
    <AppBar
      title={`ROCK - Dashboard`}
      showMenuIconButton={false}
      iconElementRight={iconElementRight}  />
  );
};

export default AppMainBar;
