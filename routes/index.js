var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = "SELECT * FROM QRTZ_TRIGGERS WHERE 1";
  //let data;

  db.query(query, (err, result) => {
    let msg = 'DB connection established!';

    if (err) {
      msg = 'There was an error connecting to the DB: ' + err;
    }

    res.render('index', { title: 'uiQ', msg: msg });
  });
});

module.exports = router;
