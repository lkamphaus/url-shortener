import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '.././styles/globals.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    width: 700,
    margin: 50,
  },
}));

const App = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div>
       <div className={style.heroWithShape}>
        <div className={style.hero}>
          <div className={style.title}>
            URL Shortener  <i className="fas fa-link fa-spin"></i>
          </div>
          <div>
            <Paper className={classes.paper}>
              <br />
              <Form/>
            </Paper>
          </div>
        </div>
        <svg className={style.svgShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366.3 106.742">
          <path fill="currentColor"
            d="M1366.3 40.982q-183.405 50.177-274.4 34.984c-90.992-15.193-181.984-45.58-272.975-35.419-90.993 9.78-181.984 61.058-272.976 65.806S363.967 71.218 272.976 50.612C181.983 30.387 90.991 30.387 45.495 30.387L0 26.33V0h1366.3z"
            opacity="0.149" />
          <path fill="currentColor"
            d="M0 40.982q183.405 50.177 274.4 34.984c90.992-15.193 181.984-45.58 272.975-35.419 90.993 9.78 181.984 61.058 272.976 65.806s181.984-35.135 272.975-55.741c90.992-20.226 181.984-20.226 227.48-20.226h45.5V0H0z"
            opacity="0.296" />
          <path fill="currentColor"
            d="M0 27.041q183.405 33.124 274.4 23.1c90.989-10.031 181.981-30.086 272.972-23.379 90.993 6.454 181.984 40.3 272.976 43.431S1002.332 47 1093.324 33.4c90.992-13.35 181.984-13.35 227.48-13.35h45.5V0H0z" />
        </svg>
      </div>
    </div>
  )
}

export default App;