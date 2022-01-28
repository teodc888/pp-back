const { Router } = require('express');
const express = require("express");
const portfolio = require('./portfolio.js');
const router = Router();
router.use(express.json());

router.use('/portfolio', portfolio);



module.exports = router;
