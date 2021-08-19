import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import style from '.././styles/globals.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     alignItems: 'flex-end',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '50ch',
//   },
//   input: {
//     width: 500,
//     margin: 20,
//   },
//   button: {
//     margin: 20,
//     alignSelf: 'flex-end',
//   }
// }));

export default function Form()  {
  // const classes = useStyles();

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
    <div className={style.container}>
      <div>
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
          variant="outlined"
          color="primary"
          onClick={handleLongUrl}>
          Submit
        </Button>
        {shortUrl.length > 0 &&
          <div>
            {shortUrl}
          </div>
        }
      </div>
    </div>
  )
}
