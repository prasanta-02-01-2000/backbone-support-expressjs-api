'use strict';
const config = require('../config');
const sql = require('mssql');

const addUserDetails = async (UserData) => {
    try {
        let pool = await sql.connect(config.sql);
        const insertEvent = await pool.request()
                                  .input('FULL_NAME', sql.VarChar(sql.MAX),UserData.FULL_NAME)
                                  .input('USER_ROLE', sql.VarChar(50), UserData.USER_ROLE)
                                  .input('USER_EMAIL', sql.VarChar(sql.MAX),UserData.USER_EMAIL)
                                  .input('USER_MOBILE_NUMBER', sql.VarChar(sql.MAX), UserData.USER_MOBILE_NUMBER)
                                  .input('USER_GENDER', sql.VarChar(sql.MAX),UserData.USER_GENDER)
                                  .input('USER_DOB', sql.VarChar(50), UserData.USER_DOB)
                                  .input('USER_NAME', sql.VarChar(sql.MAX),UserData.USER_NAME)
                                  .input('PASSWORD', sql.VarChar(sql.MAX), UserData.PASSWORD)
                                  .input('OPERATION_NAME', sql.VarChar(50), 'ADD_USER_INFO')
                                  .execute('USP_USER_ACTIVITY');
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const viewUserDetails = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const response = await pool.request()
                                  .input('OPERATION_NAME', sql.VarChar(50), 'VIEW_USER_INFO')
                                  .execute('USP_USER_ACTIVITY');
        return response.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    addUserDetails,
    viewUserDetails
}
