var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = "SELECT * FROM QRTZ_TRIGGERS WHERE 1";
  //let data;

  db.query(query, (err, result) => {
    if (err) {
      console.log("ERROR! " + err)
    }

    console.log(result);
    res.render('index', { title: 'Express', data: result[0]['TRIGGER_NAME'] });
  });
});

module.exports = router;
