// main libraries
import React from 'react';

// component
import Work from './Work/Work';

// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';

const BasicForm = (props) => {
  return (
    <Stack direction='column' spacing={2} sx={{ padding: '5px' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Poll type</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          label='Work type'
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <MenuItem value={'photo'}>
            <ImageIcon />
            &nbsp;photo
          </MenuItem>
          <MenuItem disabled value={'video'}>
            <YouTubeIcon />
            &nbsp; video
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default BasicForm;
