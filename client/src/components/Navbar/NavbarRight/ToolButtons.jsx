// main libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

// component
import UserMenu from './NavbarMenu/UserMenu';

// mui
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import BarChartIcon from '@mui/icons-material/BarChart';

// react icons
import { FaPhotoVideo } from 'react-icons/fa';
import { MdInsertPhoto } from 'react-icons/md';
import { ImFilm } from 'react-icons/im';

// ac
import { setCreateCompetitionModal } from '../../../actionCreators/modals';

const ToolButtons = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isUserMenuOpen = Boolean(userMenuAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const onInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.setCropPhotoModal(true, { data: file, url: URL.createObjectURL(file) });
    }
    setMobileMoreAnchorEl(null);
  };

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
  //       <label>
  //         <input accept='image/*' type='file' style={{ display: 'none' }} onChange={(event) => onInputChange(event)} />
  //         <MdInsertPhoto />
  //         &nbsp; Post a photo
  //       </label>
  //     </MenuItem>
  //     <MenuItem disabled onClick={handleMobileMenuClose}>
  //       <label>
  //         <input accept='video/*' type='file' style={{ display: 'none' }} />
  //         <ImFilm />
  //         &nbsp; Post a video
  //       </label>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <>
      <IconButton size='large' color='inherit' onClick={() => (window.location = '/')}>
        <HowToVoteIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton size='large' color='inherit' onClick={() => props.setCreateCompetitionModal(true)}>
        <FaPhotoVideo />
      </IconButton>
      <IconButton size='large' color='inherit'>
        <BarChartIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton size='large' color='inherit' onClick={handleUserMenuOpen}>
        <AccountCircle sx={{ color: 'white' }} />
      </IconButton>
      <UserMenu
        userMenuAnchorEl={userMenuAnchorEl}
        setUserMenuAnchorEl={setUserMenuAnchorEl}
        isUserMenuOpen={isUserMenuOpen}
        handleUserMenuClose={handleUserMenuClose}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setCreateCompetitionModal })(ToolButtons);
