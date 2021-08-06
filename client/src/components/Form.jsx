import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50ch',
  },
  input: {
    width: 500,
    margin: 20,
  }
}));

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Label"
          className={classes.input}
          placeholder="Placeholder"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  )
}

export default Form;