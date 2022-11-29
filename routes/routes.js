'use strict';

const express = require('express');
const UserControll = require('../controllers/user-controller');
const router = express.Router();

//User Activity Routes Start
router.post('/post-user-info', UserControll.addUserDetails);
router.get('/get-user-info', UserControll.viewUserDetails);
//User Activity Routes End


module.exports = {
    routes: router
}