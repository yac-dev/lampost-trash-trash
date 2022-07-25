export const setCreateCompetitionModal = (bool) => {
  return {
    type: 'OPEN_CREATE_COMPETITION_MODAL',
    payload: bool,
  };
};

export const setSignupModal = (bool) => {
  return {
    type: 'OPEN_SIGNUP_MODAL',
    payload: bool,
  };
};

export const setLoginModal = (bool) => {
  return {
    type: 'OPEN_LOGIN_MODAL',
    payload: bool,
  };
};

export const setCropPhotoModal = (bool, imageData) => {
  return {
    type: 'SET_CROP_PHOTO_MODAL',
    payload: { bool, imageData },
  };
};

export const doneCropPhoto = (index, bool) => {
  return {
    type: 'DONE_CROP_PHOTO',
    payload: { index, bool },
  };
};

// export const setImage = (image) => {
//   return {
//     type: 'SET_IMAGE',
//     payload: image,
//   };
// };
