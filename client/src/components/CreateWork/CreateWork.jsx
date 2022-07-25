// main libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

// component
import DialogSlide from '../Utils/DialogSlide';
import BasicForm from './BasicForm';
import Work from './Work/Work';

// ac
import { setCreateWorkModal } from '../../actionCreators/modals';

const CreateWork = (props) => {
  const [type, setType] = useState('');
  const [work, setWork] = useState(null);

  const onClose = () => {
    props.setCreateWorkModal(false);
  };
  const onSubmit = () => {
    console.log('submit post');
  };

  return (
    <>
      <DialogSlide
        modalOpen={props.modal.createWork.isOpen}
        title='Post your work and join!'
        onClose={onClose}
        onSubmit={onSubmit}
      >
        <BasicForm type={type} setType={setType} />
        <Work type={type} work={work} setWork={setWork} />
      </DialogSlide>
    </>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setCreateWorkModal })(CreateWork);
