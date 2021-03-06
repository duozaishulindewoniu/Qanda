import React, {Component} from 'react';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import HardwareKeyboardTab from 'material-ui/svg-icons/hardware/keyboard-tab';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import EditorverticalAlignTop from 'material-ui/svg-icons/editor/vertical-align-top';
import FlatButton from 'material-ui/FlatButton';

import {observer, inject} from 'mobx-react';

import SearchBar from './searchBar';
import ModalLog from './modalLog';

@inject("modal", "global") @observer
class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.modal = this.props.modal;
    this.openModal = this.modal.openModal;
    this.logout = this.modal.logout;

    this.global = this.props.global;
  }

  render() {
    return (
      <div style={style.wrapHead}>
        <div className="flex-row align-center justise-end m-b">
          {this.global.settingState ? (<div/>) : (<SearchBar style={style.searchBar}/>)}
          {this.modal.userInfo.loginState ? (
            <div className="flex-row align-center justise-end">
              <Avatar src={this.modal.userInfo.avatar}/>
              <IconMenu style={style.headBeside}
                        iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <Link to="/person/profile">
                  <MenuItem primaryText="个人主页" leftIcon={<ActionHome/>}/>
                </Link>
                <Link to="/person/settings">
                  <MenuItem primaryText="个人设置" leftIcon={<ActionSettings/>}/>
                </Link>
                <MenuItem primaryText="登出" leftIcon={<HardwareKeyboardTab/>} onClick={this.logout}/>
              </IconMenu>
            </div>
          ) : (
            <div>
              <FlatButton
                label="登陆" onClick={this.openModal}
                icon={<EditorverticalAlignTop/>}
              />
              <ModalLog/>
            </div>
          )}
        </div>
        <Divider style={style.divider}/>
      </div>
    );
  }
}

const style = {
  wrapHead: {
    position: 'fixed',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: '315px',
    paddingRight: '36px',
  },
  searchBar: {
    marginRight: '135px'
  },
  headBeside: {
    marginLeft: '5px'
  },
  divider: {
    marginRight: '214px'
  }
};

export default HeaderBar;
