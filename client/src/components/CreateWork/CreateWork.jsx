// main libraries
import React, { useState } from 'react';

// component
import DialogSlide from '../Utils/DialogSlide';
import BasicForm from './BasicForm';
import Work from './Work/Work';

const CreateWork = (props) => {
  const [type, setType] = useState('');
  const [work, setWork] = useState(null);

  const onClose = () => {};
  const onSubmit = () => {};

  return (
    <>
      <DialogSlide
        modalOpen={props.modal.createPoll.isOpen}
        title='What is your curiosity?'
        onClose={onClose}
        onSubmit={onSubmit}
      >
        <BasicForm type={type} setType={setType} />
        <Work type={type} work={work} setWork={setWork} />
      </DialogSlide>
    </>
  );
};

export default CreateWork;
