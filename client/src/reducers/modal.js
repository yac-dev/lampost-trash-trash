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
  cropFile: {
    isOpen: false,
    type: '',
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
    case 'SET_CROPPER_MODAL':
      return { ...state, cropFile: { isOpen: action.payload } };
    case 'CLOSE_CROPPER_MODAL':
      // data.isOpen = false;
      return { ...state, dummy: true };
    default:
      return { ...state };
  }
};

export default modalReducer;
