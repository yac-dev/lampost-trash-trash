const INITIAL_STATE = {
  login: {
    isOpen: false,
  },
  signup: {
    isOpen: false,
  },
  createCompetition: {
    isOpen: false,
  },
  cropPhoto: {
    isOpen: false,
    imageData: {},
  },
  // 最終的に、
  //{1: {isOpen: false,imageData: ''}, 2: {isOpen: false,imageData: ''}, 3" {isOpen: false,imageData: ''}, 4: {isOpen:false,imageData: '',}}
  // ていうようなdata structureにならんといかん。
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_CREATE_COMPETITION_MODAL':
      return { ...state, createCompetition: { isOpen: action.payload } };
    case 'OPEN_LOGIN_MODAL':
      return { ...state, login: { isOpen: action.payload } };
    case 'OPEN_SIGNUP_MODAL':
      return { ...state, signup: { isOpen: action.payload } };
    case 'SET_CROP_PHOTO_MODAL':
      return { ...state, cropPhoto: { isOpen: action.payload.bool, imageData: action.payload.imageData } };
    default:
      return { ...state };
  }
};

export default modalReducer;
