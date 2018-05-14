import * as types from '../Constants/ActionTypes';
import React , {Component} from 'react';
import STRINGS from '../Constants/StringConstants';
import APIConstants from '../Constants/APIConstants';
import cacheResponse from '../Cache/CacheResponse';
import FriendsModel from '../DataModels/FriendsModel';
import FriendItemModel from '../DataModels/FriendItemModel';

export function inviteFriend(model){
    return dispatch => {
        let isValid = false;
        isValid = model.length > 0 ? false : true;
        if (isValid == true) {
            for (var i = 0; i < model.length; i++) {
                isValid =  FriendsModel[i].validateAllFields();
                if (isValid == false) {
                    break;
                }
            }
        }
       
        if (isValid != true) {
            dispatch({
                type: types.INVITE_FRIENDS_API_ERROR,
                inviteFriendSuccess: false,
                inviteFriendPending: false,
                inviteFriendError: STRINGS.FORM_VALIDATION_ERROR,
            });
            return;
        } else {
            dispatch({
                type: types.INVITE_FRIENDS_API_PENDING,
                inviteFriendSuccess: false,
                inviteFriendPending: true,
                inviteFriendError: null,
            });
        }

        callInviteFriendApi((response, error) => {
            if(error) {
                dispatch({
                    type: types.INVITE_FRIENDS_API_SUCCESS,
                    inviteFriendSuccess: false,
                    inviteFriendPending: false,
                    inviteFriendError: error.message,
                });
                return;
            }
            if (response == null) {
                dispatch({
                    type: types.INVITE_FRIENDS_API_ERROR,
                    inviteFriendSuccess: false,
                    inviteFriendPending: false,
                    inviteFriendError: STRINGS.UNKNOWN_ERROR,
                })
            } else {
                dispatch({
                    type: types.INVITE_FRIENDS_API_SUCCESS,
                    inviteFriendSuccess: true,
                    inviteFriendPending: false,
                    inviteFriendError: null,
                });
            }
        });
    }

    async function callInviteFriendApi(callback, error) {

        let inviteFriendsUrl = APIConstants.INVITE_FRIEND_URL;
        console.log('printing inviteFriendsUrl--------------' + inviteFriendsUrl);
        let err = null;
        let apiResponse = null;

        fetch(inviteFriendsUrl,{
            method: 'GET',
            headers: {
                'Authorization': cacheResponse.loginToken
            },
            timeInterval: 10000,
        }).then(response => response.json())
        .then(json => {
            console.log("json messg", json);
            if (json.error != null) {
                return callback(null, json.error.message);
            } else {
                cacheResponse.saveInviteFriendResponse(json);
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
