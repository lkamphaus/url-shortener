import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50ch',
  },
  input: {
    width: 500,
    margin: 20,
  },
  button: {
    margin: 20,
    alignSelf: 'flex-end',
  }
}));

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="URL"
          className={classes.input}
          placeholder="Paste your URL here"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}>
          Primary
        </Button>
      </div>
    </div>
  )
}

export default Form;