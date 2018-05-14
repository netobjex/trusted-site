import * as types from '../Constants/ActionTypes';
import React , {Component} from 'react';
import STRINGS from '../Constants/StringConstants';
import APIConstants from '../Constants/APIConstants';
import cacheResponse from '../Cache/CacheResponse';
import myaccountModel from '../DataModels/MyAccountModel';
import moment from 'moment';

export function getMyAccount(){
    return dispatch => {
        let isValid = false;
        isValid = cacheResponse.userId == "" ? false : true;
        if (isValid != true) {
            dispatch({
                type: types.GET_MYACCOUNT_API_ERROR,
                getMyaccountSuccess: false,
                getMyaccountPending: false,
                getMyaccountError: STRINGS.USER_ID_NOT_FOUND,
            });
            return;
        } else {
            dispatch({
                type: types.GET_MYACCOUNT_API_PENDING,
                getMyaccountSuccess: false,
                getMyaccountPending: true,
                getMyaccountError: null,
            });
        }

        callGetMyAccountApi((response, error) => {
            if(error) {
                dispatch({
                    type: types.GET_MYACCOUNT_API_SUCCESS,
                    getMyaccountSuccess: false,
                    getMyaccountPending: false,
                    getMyaccountError: error.message,
                });
                return;
            }
            if (response == null) {
                dispatch({
                    type: types.GET_MYACCOUNT_API_ERROR,
                    getMyaccountSuccess: false,
                    getMyaccountPending: false,
                    getMyaccountError: STRINGS.UNKNOWN_ERROR,
                })
            } else {
                dispatch({
                    type: types.GET_MYACCOUNT_API_SUCCESS,
                    getMyaccountSuccess: true,
                    getMyaccountPending: false,
                    getMyaccountError: null,
                });
            }
        });
    }

    async function callGetMyAccountApi(callback, error) {
        var currentDate = new Date();
        currentDate = moment(currentDate).format("YYYY-MM-DD");
        console.log("currentDate:", currentDate);

        let myAccountUrl = APIConstants.MY_ACCOUNT_URL + cacheResponse.getLoginUserId() + "?" + "date=" + {currentDate};
        console.log('printing myAccountUrl--------------' +myAccountUrl);
        let err = null;
        let apiResponse = null;

        fetch(myAccountUrl,{
            method: 'GET',
            headers: {
                'Authorization': cacheResponse.getLoginToken()
            },
            timeInterval: 10000,
        }).then(response => response.json())
        .then(json => {
            console.log("json", json);
            if (json.error != null) {
                return callback(null, json.error.message);
            } else {
                cacheResponse.saveGetMyAccountResponse(json);
                return callback(json, null);
            }
        })
        .catch((error) => {
            console.error("error:",error);
            err = error.message;
            return callback(apiResponse, err);
        });
    }
}

export function updateMyAccount(model){
    return dispatch => {
        let isValid = false;
        isValid = myaccountModel.validateAllFields();
        if (isValid != true) {
            dispatch({
                type: types.UPDATE_MYACCOUNT_API_ERROR,
                updateMyaccountSuccess: false,
                updateMyaccountPending: false,
                updateMyaccountError: STRINGS.FORM_VALIDATION_ERROR,
            });
            return;
        } else {
            dispatch({
                type: types.UPDATE_MYACCOUNT_API_PENDING,
                updateMyaccountSuccess: false,
                updateMyaccountPending: true,
                updateMyaccountError: null,
            });
        }

        callUpdateMyAccountApi(model,(response, error) => {
            if(error) {
                dispatch({
                    type: types.UPDATE_MYACCOUNT_API_SUCCESS,
                    updateMyaccountSuccess: false,
                    updateMyaccountPending: false,
                    updateMyaccountError: error.message,
                });
                return;
            }
            if (response == null) {
                dispatch({
                    type: types.UPDATE_MYACCOUNT_API_ERROR,
                    updateMyaccountSuccess: false,
                    updateMyaccountPending: false,
                    updateMyaccountError: STRINGS.UNKNOWN_ERROR,
                })
            } else {
                dispatch({
                    type: types.UPDATE_MYACCOUNT_API_SUCCESS,
                    updateMyaccountSuccess: true,
                    updateMyaccountPending: false,
                    updateMyaccountError: null,
                });
            }
        });
    }

    async function callUpdateMyAccountApi(model, callback, error) {
        let myAccountUrl = APIConstants.MY_ACCOUNT_URL + cacheResponse.getLoginUserId();
        console.log('printing myAccountUrl--------------' +myAccountUrl);
        let err = null;
        let apiResponse = null;

        let bdy = null;
         console.log("update account response:", bdy);
         if (cacheResponse.getGetMyAccountResponse().role == model.roleId) {
            bdy = JSON.stringify({
                "firstname": model.firstname,
                "lastname": model.lastname,
                "email": model.email,
             })
         } else {
            bdy = JSON.stringify({
                "firstname": model.firstname,
                "lastname": model.lastname,
                "email": model.email,
                "role": model.roleId,
             })
         }
         console.log("bdy", bdy);

         let hdr = {
            'Authorization': cacheResponse.getLoginToken(),
         }
         console.log("hdr:",hdr);
        fetch(myAccountUrl,{
            method: 'PATCH',
            headers: {
                'Authorization': cacheResponse.getLoginToken(),
                'Content-Type': 'application/json'
            },
            body: bdy,
            timeInterval: 10000,
        }).then(response => response.json())
        .then(json => {
            console.log("json", json);
            if (json.error != null) {
                return callback(null, json.error.message);
            } else {
                cacheResponse.saveUpdateMyAccountResponse(json);
                return callback(json, null);
            }
        })
        .catch((error) => {
            console.error("error:",error);
            err = error.message
            return callback(apiResponse, err);
        });
    }
}

export function passwordChange(password, new_password){
    return dispatch => {
        let isValid = false;
        let error = null;
        console.log("password:",password);
        console.log("new_password:",new_password);
        isValid = myaccountModel.validatePassword(new_password)
        if (isValid != true) {
            dispatch({
                type: types.CHANGE_PASSWORD_API_ERROR,
                changePasswordSuccess: false,
                changePasswordPending: false,
                changePasswordError: STRINGS.PASSWORD_VALIDATION_ERROR,
            });
            return;
        } else {
            dispatch({
                type: types.CHANGE_PASSWORD_API_PENDING,
                changePasswordSuccess: false,
                changePasswordPending: true,
                changePasswordError: null,
            });
        }

        callChangePasswordApi(password, new_password, (response, error) => {
            if(error) {
                dispatch({
                    type: types.CHANGE_PASSWORD_API_SUCCESS,
                    changePasswordSuccess: false,
                    changePasswordPending: false,
                    changePasswordError: error,
                });
                return;
            }
            if (response == null) {
                dispatch({
                    type: types.CHANGE_PASSWORD_API_ERROR,
                    changePasswordSuccess: false,
                    changePasswordPending: false,
                    changePasswordError: STRINGS.UNKNOWN_ERROR,
                })
            } else {
                dispatch({
                    type: types.CHANGE_PASSWORD_API_SUCCESS,
                    changePasswordSuccess: true,
                    changePasswordPending: false,
                    changePasswordError: null,
                });
            }
        });
    }

    async function callChangePasswordApi(password, new_password,callback, error) {
        let changePasswordUrl = APIConstants.PASSWORD_CHANGE_URL;
        console.log('printing changePasswordUrl--------------' +changePasswordUrl);

        console.log("in call password:",password);
        console.log("in call new_password:",new_password);
        let err = null;
        let apiResponse = null;

        fetch(changePasswordUrl,{
            method: 'POST',
            headers: {
                'Authorization': cacheResponse.getLoginToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password":password,
                "new_password":new_password
            }),
            timeInterval: 10000,
        }).then(response => response.json())
        .then(json => {
            console.log("json", json);
            if (json.error != null) {
                return callback(null, json.error.message);
            } else {
                return callback(json, null);
            }
        })
        .catch((error) => {
            console.error("error:",error);
            err = error.message;
            return callback(apiResponse, err);
        });
    }
}

export function resetGetMyAccountAction() {
    return dispatch => {
        dispatch({
            type: types.GET_MYACCOUNT_RESET,
            getMyaccountSuccess: false,
            getMyaccountPending: false,
            getMyaccountError: null,
        });
    }
}

export function resetUpdateMyAccountAction() {
    return dispatch => {
        dispatch({
            type: types.UPDATE_MYACCOUNT_RESET,
            updateMyaccountSuccess: false,
            updateMyaccountPending: false,
            updateMyaccountError: null,
        });
    }
}

export function resetChangePasswordAction() {
    return dispatch => {
        dispatch({
            type: types.CHANGE_PASSWORD_RESET,
            changePasswordSuccess: false,
            changePasswordPending: false,
            changePasswordError: null,
        });
    }
}