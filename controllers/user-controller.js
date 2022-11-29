'use strict';
const UserService = require('../services/user-service');

const addUserDetails = async (req, res) => {
    try {
        const UserData = req.body;
        const response = await UserService.addUserDetails(UserData);
        res.send(response);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const viewUserDetails = async (req, res) => {
    try {
        const response = await UserService.viewUserDetails();
        res.send(response);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUserDetails,
    viewUserDetails
}