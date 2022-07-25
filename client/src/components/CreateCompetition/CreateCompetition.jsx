// main libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

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

  const onClose = () => {};

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

export default connect(mapStateToProps)(CreateCompetition);
