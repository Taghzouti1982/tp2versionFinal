var express = require('express');
var router = express.Router();
const axios = require('axios').default;
var htmlDir='./html';
/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const URL = "http://localhost:4000/plats";
    const Resultat = await axios.get(URL);
    res.render('index', { plats: Resultat.data });
  } catch (error) {
    console.error(error);
  }
});

router.get('/accueil', async function (req, res, next) {
  try {
      res.sendfile('./html/accueil.html');
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;
