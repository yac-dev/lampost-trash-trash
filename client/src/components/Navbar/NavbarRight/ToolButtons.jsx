// main libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

// react icons
import { FaPhotoVideo } from 'react-icons/fa';
import { MdInsertPhoto } from 'react-icons/md';
import { ImFilm } from 'react-icons/im';

// ac
import { setCropPhotoModal } from '../../../actionCreators/modals';
import { setCreateCompetitionModal } from '../../../actionCreators/modals';

const ToolButtons = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.setCropPhotoModal(true, { data: file, url: URL.createObjectURL(file) });
    }
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <label>
          <input accept='image/*' type='file' style={{ display: 'none' }} onChange={(event) => onInputChange(event)} />
          <MdInsertPhoto />
          &nbsp; Post a photo
        </label>
      </MenuItem>
      <MenuItem disabled onClick={handleMobileMenuClose}>
        <label>
          <input accept='video/*' type='file' style={{ display: 'none' }} />
          <ImFilm />
          &nbsp; Post a video
        </label>
      </MenuItem>
    </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
  //         <Badge badgeContent={4} color='error'>
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
  //         <Badge badgeContent={17} color='error'>
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size='large'
  //         aria-label='account of current user'
  //         aria-controls='primary-search-account-menu'
  //         aria-haspopup='true'
  //         color='inherit'
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <>
      <IconButton size='large' color='inherit' onClick={() => (window.location = '/')}>
        <HowToVoteIcon sx={{ color: 'white' }} />
      </IconButton>
      {/* <IconButton size='large' color='inherit' onClick={handleMobileMenuOpen}>
        <FaPhotoVideo />
      </IconButton> */}
      <IconButton size='large' color='inherit' onClick={() => props.setCreateCompetitionModal(true)}>
        <FaPhotoVideo />
      </IconButton>
      <IconButton size='large' color='inherit'>
        <BarChartIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton size='large' color='inherit'>
        <AccountCircle sx={{ color: 'white' }} />
      </IconButton>
      {renderMobileMenu}
    </>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setCropPhotoModal, setCreateCompetitionModal })(ToolButtons);
