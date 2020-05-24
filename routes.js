const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const env = require('dotenv');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const { NEWS_URL, API_KEY } = process.env;
const newsUrl = `${NEWS_URL}?country=gb&apiKey=${API_KEY}`;

router.use(function setFileName (req, res, next) {
  res.locals.filename = req.originalUrl;
  next();
});

// router.get('/', (req, res) => {
//   res.render('pages/index');
// });

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

router.post('/contact-result', (req, res) => {
  const { name, email } = req.body;
  res.render('pages/contact-result', { name, email });
});

router.get('/', async (req, res) => {
  const response = await fetch(newsUrl);
  const result = await response.json();
  res.render('pages/news', { articles: result.articles });
});

router.get('/news', async (req, res) => {
  const response = await fetch(newsUrl);
  const result = await response.json();
  res.render('pages/news', { articles: result.articles });
});

module.exports = router;