const express = require('express');
const validUrl = require('valid-url');

//create a unique id
const shortid = require('shortid');

const router = express.Router();

const Url = require('../models/Url');

const baseUrl = 'https:localhost:7000';

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base URL');
  }

  const urlCode = shortid.generate();

  if (validUrl.isUri(longUri)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url)
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        })

        await url.save();
        res.json(url)
      }
    } catch (err) {
      console.log(err);
      res.status(500)
    }
  }
})

module.exports = router