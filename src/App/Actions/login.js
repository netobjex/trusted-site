/* AJAX GET using fetch
fetch('https://www.reddit.com/r/' + url + '.json').then(function (response) {
        return response.json();
}).then(function (result) {
    console.log(result.data.children);
});
*/

/* AJAX POST using fetch
var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
});
*/
/* AJAX call
componentDidMount() {

      fetchFirst("reactjs").then((posts)=>{
          this.state.posts = posts;
      });

  }    
*/

/* AJAX call
export function fetchBook(id) {
    return dispatch => {
      dispatch(setLoadingBookState()); // Show a loading spinner
      fetch(`/book/${id}`, (response) => {
        dispatch(doneFetchingBook()); // Hide loading spinner
        if(response.status == 200){
          dispatch(setBook(response.json)); // Use a normal function to set the received state
        }else { 
          dispatch(someError)
        }
      })
    }
   }
   
   function setBook(data) {
    return { type: 'SET_BOOK', data: data };
   }*/
import * as types from '../Constants/ActionTypes';
import React, { Component } from 'react';
import APIConstants from '../Constants/APIConstants';
import STRINGS from '../Constants/StringConstants';
import cacheResponse from '../Cache/CacheResponse';
import loginModel from '../DataModels/LoginModel';

export function login(model) {
    return dispatch => {
        // Validating input
        let isValid = false;
        isValid = loginModel.validateAllFields();
        console.log("isValid in dispatch login:",isValid);
        if (isValid != true) {
            dispatch({
                type: types.LOGIN_API_ERROR,
                loginSuccess: false,
                loginPending: false,
                loginError: STRINGS.FORM_VALIDATION_ERROR,
            });
            return;
        } else {
            dispatch({
                type: types.LOGIN_API_PENDING,
                loginSuccess: false,
                loginPending: true,
                loginError: null
            });
        }

        callLoginAPI(model, (response, error) => {
            if(error) {
                dispatch({
                    type: types.LOGIN_API_SUCCESS,
                    loginSuccess: false,
                    loginPending: false,
                    loginError: error.message,
                });
                return;
            }
            if (response == null) {
                console.log("response null");
                
                dispatch({
                    type: types.LOGIN_API_ERROR,
                    loginSuccess: false,
                    loginPending: false,
                    loginError: STRINGS.UNKNOWN_ERROR,
                });
            } else {
                dispatch({
                    type: types.LOGIN_API_SUCCESS,
                    loginSuccess: true,
                    loginPending: false,
                    loginError: null,
                });
            }
        });
    }
    async function callLoginAPI(model, callback, error) {
        let loginUrl = APIConstants.LOGIN_URL;
        console.log('printing loginUrl--------------' +loginUrl);
        let err = null;
        let apiResponse = null;

        fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: model.email,
                    password: model.password,
                    remember: model.remember
                }),
                timeoutInterval: 10000,
            }).then(response => response.json())
            .then(json => {
                
                if (json.error != null) {
                    console.log("json msg", json.error.message);
                    return callback(null, json.error);
                } else {
                    cacheResponse.saveLoginResponse(json);
                return callback(json, null);
                }
            })
            .catch((error) => {
                console.error("error is:",error);
                err = error.message;
                return callback(apiResponse, err);
            });
    }
}

export function resetLoginAction() {
    return dispatch => {
        dispatch({
            type: types.LOGIN_RESET,
            loginSuccess: false,
            loginPending: false,
            loginError: null,
        });
    }
}