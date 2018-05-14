import { AsyncStorage } from 'AsyncStorage';
import * as types from '../Constants/ActionTypes';

export default function reducerMyAccount(state={
    getMyaccountSuccess: false,
    getMyaccountPending: false,
    getMyaccountError: null,

    updateMyaccountSuccess: false,
    updateMyaccountPending: false,
    updateMyaccountError: null,

    changePasswordSuccess: false,
    changePasswordPending: false,
    changePasswordError: null,

}, action){
    switch(action.type) {
        case types.GET_MYACCOUNT_API_PENDING:
            return Object.assign({}, state, {
                getMyaccountSuccess: action.getMyaccountSuccess,
                getMyaccountPending: action.getMyaccountPending,
                getMyaccountError: action.getMyaccountError
            });

        case types.GET_MYACCOUNT_API_SUCCESS:
            return Object.assign({}, state, {
                getMyaccountSuccess: action.getMyaccountSuccess,
                getMyaccountPending: action.getMyaccountPending,
                getMyaccountError: action.getMyaccountError,
            });

        case types.GET_MYACCOUNT_API_ERROR:
            return Object.assign({}, state, {
                getMyaccountSuccess: action.getMyaccountSuccess,
                getMyaccountPending: action.getMyaccountPending,
                getMyaccountError: action.getMyaccountError,
            });
        
        case types.GET_MYACCOUNT_RESET:
            return Object.assign({}, state, {
                getMyaccountSuccess: action.getMyaccountSuccess,
                getMyaccountPending: action.getMyaccountPending,
                getMyaccountError: action.getMyaccountError,
            });
        
        case types.UPDATE_MYACCOUNT_API_PENDING:
            return Object.assign({}, state, {
                updateMyaccountSuccess: action.updateMyaccountSuccess,
                updateMyaccountPending: action.updateMyaccountPending,
                updateMyaccountError: action.updateMyaccountError
            });

        case types.UPDATE_MYACCOUNT_API_SUCCESS:
            return Object.assign({}, state, {
                updateMyaccountSuccess: action.updateMyaccountSuccess,
                updateMyaccountPending: action.updateMyaccountPending,
                updateMyaccountError: action.updateMyaccountError,
            });

        case types.UPDATE_MYACCOUNT_API_ERROR:
            return Object.assign({}, state, {
                updateMyaccountSuccess: action.updateMyaccountSuccess,
                updateMyaccountPending: action.updateMyaccountPending,
                updateMyaccountError: action.updateMyaccountError,
            });

        case types.UPDATE_MYACCOUNT_RESET:
            return Object.assign({}, state, {
                updateMyaccountSuccess: action.updateMyaccountSuccess,
                updateMyaccountPending: action.updateMyaccountPending,
                updateMyaccountError: action.updateMyaccountError,
            });

        case types.CHANGE_PASSWORD_API_PENDING:
            return Object.assign({}, state, {
                changePasswordSuccess: action.changePasswordSuccess,
                changePasswordPending: action.changePasswordPending,
                changePasswordError: action.changePasswordError
            });

        case types.CHANGE_PASSWORD_API_SUCCESS:
            return Object.assign({}, state, {
                changePasswordSuccess: action.changePasswordSuccess,
                changePasswordPending: action.changePasswordPending,
                changePasswordError: action.changePasswordError,
            });

        case types.CHANGE_PASSWORD_API_ERROR:
            return Object.assign({}, state, {
                changePasswordSuccess: action.changePasswordSuccess,
                changePasswordPending: action.changePasswordPending,
                changePasswordError: action.changePasswordError,
            });

        case types.CHANGE_PASSWORD_RESET:
            return Object.assign({}, state, {
                changePasswordSuccess: action.changePasswordSuccess,
                changePasswordPending: action.changePasswordPending,
                changePasswordError: action.changePasswordError,
            });
        default:
            return state;
    }

    function getMyaccountPending(getMyaccountPending) {
        return {
            type: types.GET_MYACCOUNT_API_PENDING,
            getMyaccountPending,
        };
    }

    function getMyaccountSuccess(getMyaccountSuccess,response) {
        return {
            type: types.GET_MYACCOUNT_API_SUCCESS,
            getMyaccountSuccess,
            response,
        };
    }

    function getMyaccountError(getMyaccountError) {
        return {
            type: types.GET_MYACCOUNT_API_ERROR,
            getMyaccountError,
        }
    } 
    
    function updateMyaccountPending(updateMyaccountPending) {
        return {
            type: types.UPDATE_MYACCOUNT_API_PENDING,
            updateMyaccountPending,
        };
    }

    function updateMyaccountSuccess(updateMyaccountSuccess,response) {
        return {
            type: types.UPDATE_MYACCOUNT_API_SUCCESS,
            updateMyaccountSuccess,
            response,
        };
    }

    function updateMyaccountError(updateMyaccountError) {
        return {
            type: types.UPDATE_MYACCOUNT_API_ERROR,
            updateMyaccountError,
        }
    }    
}
