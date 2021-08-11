const mongoose = require('mongoose');

let urlSchema = mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  date: {
    type: String,
    requried: Date.now
  },
  urlCode: {
    type: String,
    requried: true
  },
  longUrl: {
    type: String,
    requried: true,
  },
  shortUrl: {
    type: String,
    requried: true,
  }
});

let url = mongoose.model('Url', urlSchema);

module.exports = Chart;