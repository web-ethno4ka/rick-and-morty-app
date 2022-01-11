import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

export default function ComboBox() {
  const [list, setList] = useState({});

  useEffect(() => {
    axios('https://rickandmortyapi.com/api/character').then((res) => setList(res.data));
  }, []);

  const onListChange = (event, value) => {
    // setList(value[]);
    console.log(list);
  };

  const { results } = list;
  // console.log(typeof results);
  // console.log(results);
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={results ? results : ''}
      getOptionLabel={(option) => option.name}
      onChange={onListChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Characters" />}
    />
  );
}
