import { AsyncStorage } from 'AsyncStorage';
import * as types from '../Constants/ActionTypes';

export default function reducerInviteFriends(state={
    inviteFriendSuccess: false,
    inviteFriendPending: false,
    inviteFriendError: null,
}, action){
    switch(action.type) {
        case types.INVITE_FRIENDS_API_PENDING:
            return Object.assign({}, state, {
                inviteFriendSuccess: action.inviteFriendSuccess,
                inviteFriendPending: action.inviteFriendPending,
                inviteFriendError: action.inviteFriendError
            });

        case types.INVITE_FRIENDS_API_SUCCESS:
            return Object.assign({}, state, {
                inviteFriendSuccess: action.inviteFriendSuccess,
                inviteFriendPending: action.inviteFriendPending,
                inviteFriendError: action.inviteFriendError,
            });

        case types.INVITE_FRIENDS_API_ERROR:
            return Object.assign({}, state, {
                inviteFriendSuccess: action.inviteFriendSuccess,
                inviteFriendPending: action.inviteFriendPending,
                inviteFriendError: action.inviteFriendError,
            });

        default:
            return state;
    }

    function inviteFriendPending(inviteFriendPending) {
        return {
            type: types.INVITE_FRIENDS_API_PENDING,
            inviteFriendPending,
        };
    }

    function inviteFrienduccess(inviteFriendSuccess,response) {
        return {
            type: types.INVITE_FRIENDS_API_SUCCESS,
            inviteFriendSuccess,
            response,
        };
    }

    function inviteFriendError(inviteFriendError) {
        return {
            type: types.INVITE_FRIENDS_API_ERROR,
            inviteFriendError,
        }
    }    
}