const express = require('express');

const router = express.Router();

const Url = require('../models/Url');

router.get('/:code', async (req, res) => {
  console.log(req.params);
  try {

    const url = await Url.findOne({
      urlCode: req.params.code
    });

    if (url) {

      //Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.

      console.log('long', url.longUrl)
      return res.redirect(url.longUrl)
    } else {
      return res.status(404).json('No URL Found');
    }
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})

module.exports = router