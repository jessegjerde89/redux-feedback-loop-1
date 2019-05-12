const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/feedback', (req, res) => {
    console.log(req.body);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
    VALUES ($1, $2, $3, $4, $5, $6);`
  
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments, req.body.flagged, req.body.date])
    .then((result) => {
      console.log('CREATED!');
      res.sendStatus(201);
    }).catch((err) => {
      console.log('error in POST', err);
      res.sendStatus(500);
    })
  });

module.exports = router;