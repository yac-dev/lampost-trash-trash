// main libraries
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import ReactEasyCrop from 'react-easy-crop';

//ac
import { setCropperModal } from '../../actionCreators/modals';
import { setCroppingFile } from '../../actionCreators/croppingFile';

// component
import DialogSlide from '../Utils/DialogSlide';

const PhotoCropper = (props) => {
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  // aspectoは、4/5（縦長）か、1か、4/3か、19:9の4つのoptionを用意しようか。

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const onClose = () => {
    props.setCropperModal(false);
  };

  // const onSubmit = () => {
  //   props.closeCropperModal(false);
  // };

  if (props.modal.cropFile.isOpen) {
    return (
      <DialogSlide
        modalOpen={props.modal.cropFile.isOpen}
        title='Crop your photo'
        onClose={onClose}
        // onSubmit={onSubmit}
        style={{ sx: { width: '100%', height: 400 } }}
      >
        <div
          className='crop-container'
          style={{
            position: 'absolute',
            top: '50px',
            left: '0',
            right: '0',
            bottom: '50px',
          }}
        >
          <ReactEasyCrop
            // image={props.croppingFile.url}
            video={props.croppingFile.url}
            crop={crop}
            onCropChange={setCrop}
            zoom={zoom}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            aspect={16 / 9}
          />
        </div>
      </DialogSlide>
    );
  }
};

const mapStateToProps = (state) => {
  return { modal: state.modal, croppingFile: state.croppingFile };
};

export default connect(mapStateToProps, { setCropperModal, setCroppingFile })(PhotoCropper);
