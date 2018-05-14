import { AsyncStorage } from 'AsyncStorage';
import * as types from '../Constants/ActionTypes';

export default function reducerLogin(state={
    loginSuccess: false,
    loginPending: false,
    loginError: null,

    signupSuccess: false,
    signupPending: false,
    signupError: null,

    roleSuccess: false,
    rolePending: false,
    roleError: null,

}, action){
    switch (action.type) {
        case types.LOGIN_API_PENDING:
            return Object.assign({}, state, {
                loginSuccess: action.loginSuccess,
                loginPending: action.loginPending,
                loginError: action.loginError
            });

        case types.LOGIN_API_SUCCESS:
            return Object.assign({}, state, {
                loginSuccess: action.loginSuccess,
                loginPending: action.loginPending,
                loginError: action.loginError,
            });

        case types.LOGIN_API_ERROR:
            return Object.assign({}, state, {
                loginSuccess: action.loginSuccess,
                loginPending: action.loginPending,
                loginError: action.loginError,
            });

        case types.LOGIN_RESET:
            return Object.assign({},state, {
                loginSuccess: action.loginSuccess,
                loginPending: action.loginPending,
                loginError: action.loginError,
            });

        case types.SIGNUP_API_PENDING:
            return Object.assign({}, state, {
                signupSuccess: action.signupSuccess,
                signupPending: action.signupPending,
                signupError: action.signupError
            });

        case types.SIGNUP_API_SUCCESS:
            return Object.assign({}, state, {
                signupSuccess: action.signupSuccess,
                signupPending: action.signupPending,
                signupError: action.signupError,
            });

        case types.SIGNUP_API_ERROR:
            return Object.assign({}, state, {
                signupSuccess: action.signupSuccess,
                signupPending: action.signupPending,
                signupError: action.signupError,
            });

        case types.SIGNUP_RESET:
            return Object.assign({}, state, {
                signupSuccess: action.signupSuccess,
                signupPending: action.signupPending,
                signupError: action.signupError,
            });

        case types.GET_ROLE_API_PENDING:
            return Object.assign({}, state, {
                roleSuccess: action.roleSuccess,
                rolePending: action.rolePending,
                roleError: action.roleError
            });

        case types.GET_ROLE_API_SUCCESS:
            return Object.assign({}, state, {
                roleSuccess: action.roleSuccess,
                rolePending: action.rolePending,
                roleError: action.roleError,
            });

        case types.GET_ROLE_API_ERROR:
            return Object.assign({}, state, {
                roleSuccess: action.roleSuccess,
                rolePending: action.rolePending,
                roleError: action.roleError,
            });
            
        case types.GET_ROLE_RESET:
            return Object.assign({
                roleSuccess: action.roleSuccess,
                rolePending: action.rolePending,
                roleError: action.roleError,
            });

        default:
            return state;
    }

    function loginPending(loginPending) {
        return {
            type: types.LOGIN_API_PENDING,
            loginPending,
        };
    }

    function loginSuccess(loginSuccess,response) {
        return {
            type: types.LOGIN_API_SUCCESS,
            loginSuccess,
            response,
        };
    }

    function loginError(loginError) {
        return {
            type: types.LOGIN_API_ERROR,
            loginError,
        }
    }   
    
    function signupPending(signupPending) {
        return {
            type: types.SIGNUP_API_PENDING,
            signupPending,
        };
    }

    function signupSuccess(signupSuccess,response) {
        return {
            type: types.SIGNUP_API_SUCCESS,
            signupSuccess,
            response,
        };
    }

    function signupError(signupError) {
        return {
            type: types.SIGNUP_API_ERROR,
            signupError,
        }
    }    

    function rolePending(rolePending) {
        return {
            type: types.GET_ROLE_API_PENDING,
            rolePending,
        };
    }

    function roleSuccess(roleSuccess,response) {
        return {
            type: types.GET_ROLE_API_SUCCESS,
            roleSuccess,
            response,
        };
    }

    function roleError(roleError) {
        return {
            type: types.GET_ROLE_API_ERROR,
            roleError,
        }
    }    
}