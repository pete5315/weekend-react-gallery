const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    likes=req.body.data*1;
    const galleryId = req.params.id;
    let sqlText = `UPDATE "list" SET "likes" = $1 WHERE id=$2;`;
    //send the query to SQL
    pool.query(sqlText, [likes, galleryId])
    //if SQL doesn't error
    .then( (result) => {
        console.log('Like added')
        res.sendStatus(200);
    })
    //if SQL DOES error
    .catch( (error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM list ORDER BY id ASC;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
}); // END GET Route

module.exports = router;