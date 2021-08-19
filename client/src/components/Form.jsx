import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import style from '.././styles/globals.css';

const useStyles = makeStyles((theme) => ({
  button: {
    height: 40,
    alignSelf: "flex-end",
    margin: "10px;"
  }
}));

export default function Form()  {
  const classes = useStyles();

  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleUrlChange = (e) => {
    e.preventDefault();
    setLongUrl(e.target.value);
  }

  const handleLongUrl = async () => {

    try{
      const res = await fetch('/api/url/shorten', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({longUrl})
      })
      const url = await res.json();
      setShortUrl(url.shortUrl);
    } catch(err) {
      console.log('err', err)
    }
  }

  return (
    <div>
      <div className={style.container}>
        <TextField
          fullWidth="true"
          label="URL"
          placeholder="Paste your URL here"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={longUrl}
          onChange={handleUrlChange}
        />
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={handleLongUrl}>
          Submit
        </Button>
      </div>
      {shortUrl.length > 0 &&
          <div className={style.urlContainer}>
            {/* <a href={shortUrl} target="_blank">{shortUrl}</a> */}
            {shortUrl}
          </div>
        }
    </div>
  )
}
