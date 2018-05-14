import * as types from '../Constants/ActionTypes';
import React, { Component } from 'react';
import APIConstants from '../Constants/APIConstants';
import cacheResponse from '../Cache/CacheResponse';
import signupModel from '../DataModels/SignupModel';
import STRINGS from '../Constants/StringConstants';

export function signup(model) {
    return dispatch => {
        let isValid = false;
        isValid = signupModel.validateAllFields();
        console.log("signup isValid", isValid);
        if (isValid != true) {
            dispatch({
                    type: types.SIGNUP_API_ERROR,
                    signupSuccess: false,
                    signupPending: false,
                    signupError: STRINGS.FORM_VALIDATION_ERROR,
                });
                return;
        } else {
            dispatch({
                type: types.SIGNUP_API_PENDING,
                signupSuccess: false,
                signupPending: true,
                signupError: null,
            });
        }

        callSignupAPI(model,(response, error) => {
            if(error) {
                dispatch({
                    type: types.SIGNUP_API_SUCCESS,
                    signupSuccess: false,
                    signupPending: false,
                    signupError: error.message,
                });
                return;
            }
            if (response == null) {
                dispatch({
                    type: types.SIGNUP_API_ERROR,
                    signupSuccess: false,
                    signupPending: false,
                    signupError: STRINGS.UNKNOWN_ERROR,
                });
            } else {
                dispatch({
                    type: types.SIGNUP_API_SUCCESS,
                    signupSuccess: true,
                    signupPending: false,
                    signupError: null,
                });
            }
        });
    }
    async function callSignupAPI(model, callback, error) {
        let signupUrl = APIConstants.SIGNUP_URL;
        console.log('printing signupUrl--------------' +signupUrl);
        let apiResponse = null;
        let err = null;
        let hdrs = {
            'X-API-AUTH-KEY': APIConstants.XAPIAUTHKEY,
            'Content-Type': 'application/json',
        }
        console.log("headres:", hdrs);

        let bdy = JSON.stringify({
            "username": model.username,
            "email": model.email,
            "first_name": model.first_name,
            "last_name": model.last_name,
            "password": model.password,
            "role": model.role})
        console.log("body:",bdy);

        fetch(signupUrl, {
            method: 'POST',
            headers: {
                'X-API-AUTH-KEY': APIConstants.XAPIAUTHKEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    "username": model.username,
                    "email": model.email,
                    "first_name": model.first_name,
                    "last_name": model.last_name,
                    "password": model.password,
                    "role": model.role
            }),
            timeoutInterval: 10000,
        }).then(response => response.json())
        .then(json => {
            console.log("json", json);
            if (json.error != null) {
                return callback(null, json.error.message);
            } else {
                cacheResponse.saveSignupResponse(json);
            return callback(json, null);
            }
        })
        .catch((error) => {
            console.error(error);
            err = error.message;
            return callback(apiResponse, err);
        });
    }
}


export function getRoles() {
    return dispatch => {
        dispatch({
            type: types.GET_ROLE_API_PENDING,
            roleSuccess: false,
            rolePending: true,
            roleError: null,
        });

        callGetRoleAPI((response, error) => {
            if(error) {
                dispatch({
                    type: types.GET_ROLE_API_SUCCESS,
                    roleSuccess: false,
                    rolePending: false,
                    roleError: error.message,
                });
                return;
            }
            if (response == null) {
                dispatch({
                    type: types.GET_ROLE_API_ERROR,
                    roleSuccess: false,
                    rolePending: false,
                    roleError: STRINGS.UNKNOWN_ERROR,
                });
            } else {
                dispatch({
                    type: types.GET_ROLE_API_SUCCESS,
                    roleSuccess: true,
                    rolePending: false,
                    roleError: null,
                });
            }
        });
    }
    async function callGetRoleAPI(callback, error) {
        let roleUrl = APIConstants.ROLE_URL;
        console.log('printing roleUrl--------------' +roleUrl);
        let apiResponse = null;
        let err = null;
       
        fetch(roleUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeoutInterval: 10000,
        }).then(response => response.json())
        .then(json => {
            console.log("json", json);
            if (json.error != null) {
                return callback(null, json.error.message);
            } else {
                cacheResponse.saveGetRoleResponse(json);
            return callback(json, null);
            }
        })
        .catch((error) => {
            console.error(error);
            err = error;
            return callback(apiResponse, err);
        });
    }
}

export function resetSignupAction() {
    return dispatch => {
        dispatch({
            type: types.SIGNUP_RESET,
            signupSuccess: false,
            signupPending: false,
            signupError: null,
        });
    }
}

export function resetRoleAction() {
    return dispatch => {
        dispatch({
            type: types.GET_ROLE_RESET,
            roleSuccess: false,
            rolePending: false,
            roleError: null,
        });
    }
}