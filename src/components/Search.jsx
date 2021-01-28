import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Search = (props) => {
  const classes = useStyles();
  // console.log(props.breedList[2]);
  props.breedList.forEach((breed) => {
    console.log(breed.index);
    console.log(breed.breed);
  });
  console.log(props.currentBreed);
  // console.log(props.objBreedList[3]);

  return (
    <div>
      <h3>Serach.jsx</h3>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.currentBreed}
          onChange={props.handleChange}
        >
          {props.breedList.map((objBreed) => {
            console.log(objBreed);
            return <MenuItem key={objBreed.index.toString()} value={objBreed.breed}>{objBreed.breed}</MenuItem>
          })};
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          onChange={props.handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}

export default Search;
