// main libraries
import React from 'react';
import { connect } from 'react-redux';

import { setCropPhotoModal } from '../../actionCreators/modals';

// mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Form = (props) => {
  const onInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.setCropPhotoModal(true, { data: file, url: URL.createObjectURL(file) });
    }
  };

  return (
    <Stack direction='column' spacing={2} sx={{ padding: '5px' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>The number of participants</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          label='The number of participants'
          value={props.participants}
          onChange={(event) => props.setParticipants(event.target.value)}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Competition type</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          label='Competition type'
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <MenuItem value={'video'}>
            <label>
              <input
                accept='video/mp4,video/x-m4v,video/*'
                type='file'
                style={{ display: 'none' }}
                onChange={(event) => onInputChange(event)}
              />
              <YouTubeIcon />
              &nbsp; Video
            </label>
          </MenuItem>
          <MenuItem value={'photo'}>
            <label>
              <input
                accept='image/*'
                type='file'
                style={{ display: 'none' }}
                onChange={(event) => onInputChange(event)}
              />
              <AddPhotoAlternateIcon />
              &nbsp; Photo
            </label>
          </MenuItem>
        </Select>
      </FormControl>
      {/* {renderPhotoOrVideo()} */}
      <TextField
        id='outlined-multiline-flexible'
        label='Message'
        placeholder='e.g. Can you do better than me? Challenge me!'
        multiline
        fullWidth
        maxRows={4}
        value={props.message}
        onChange={(event) => props.setMessage(event.target.value)}
      />
    </Stack>
  );
};

export default connect(null, { setCropPhotoModal })(Form);
