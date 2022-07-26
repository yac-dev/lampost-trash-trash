// main libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

// ac
import { setCreateCompetitionModal } from '../../actionCreators/modals';
import { setCropperModal } from '../../actionCreators/modals';

// component
import DialogSlide from '../Utils/DialogSlide';
import Form from './Form';

const CreateCompetition = (props) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState(4);

  const onSubmit = () => {
    console.log('hi');
  };

  const onClose = () => {
    props.setCreateCompetitionModal(false);
  };

  return (
    <DialogSlide
      modalOpen={props.modal.createCompetition.isOpen}
      title='Create competition'
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <Form
        message={message}
        setMessage={setMessage}
        type={type}
        setType={setType}
        participants={participants}
        setParticipants={setParticipants}
      />
    </DialogSlide>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setCropperModal, setCreateCompetitionModal })(CreateCompetition);
