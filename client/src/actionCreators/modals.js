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

export const setCropperModal = (bool) => {
  return {
    type: 'SET_CROPPER_MODAL',
    payload: bool,
  };
};

export const closeCropperModal = (bool) => {
  return {
    type: 'CLOSE_CROPPER_MODAL',
    payload: bool,
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
