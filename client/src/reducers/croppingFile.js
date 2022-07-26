const INITIAL_STATE = {
  data: null,
  url: null,
};

const croppingFile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CROPPING_FILE':
      return { ...state, data: action.payload.data, url: action.payload.url };
    default:
      return { ...state };
  }
};

export default croppingFile;
