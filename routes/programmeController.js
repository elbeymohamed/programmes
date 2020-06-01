const express = require('express')
const router = express.Router()
const Programme = require('../models/programme'); 
 
 
router.post('/listeProgrammes', async function (req, res,next) {
    try {
	  const programmes = await Programme.find({"domaine": req.body.formation,"region": req.body.region},{});
        //res.json(rest);
        res.render('listeProgrammes', { progs : programmes});
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
});
  

module.exports = router