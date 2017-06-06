import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';
import Avatar from 'react-toolbox/lib/avatar';
import theme from './PurpleAppBar.css';


const NinjaAppBar = () => (
  <AppBar title='React Toolbox' leftIcon='menu' theme={theme}>
    <Avatar image="/ninja-logo.png" id="app-bar-ninja" />

    <Navigation type='horizontal'>      
    </Navigation>
  </AppBar>
);

export default NinjaAppBar;