export const setCroppingFile = (fileObject) => {
  return {
    type: 'CROPPING_FILE',
    payload: fileObject,
  };
};
