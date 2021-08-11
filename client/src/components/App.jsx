import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Form from './Form.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 700,
    marginTop: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
  }
}));

const App = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <Grid>
            <Paper className={classes.paper}>
              <Typography className={classes.title}>
                Url Shortener
              </Typography>
              <br />
              <Form/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;