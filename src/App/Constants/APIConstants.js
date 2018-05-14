const PrivateConstants = {
    LOGIN_PATH :"authenticate",
    SIGNUP_PATH :"register",
    ACTIVATE_USER_PATH : "userActivation?token=",
    PASSWORD_RESET_PATH : "reset",
    PASSWORD_CONFIRM_RESET_PATH : "confirm-reset",
    PASSWORD_CHANGE_PATH: "changePassword",
    DOMAIN : "https://api.stg.netobjex.com/api/users/",
};

const APIConstants = {
    LOGIN_URL: PrivateConstants.DOMAIN + PrivateConstants.LOGIN_PATH, 
    SIGNUP_URL: PrivateConstants.DOMAIN + PrivateConstants.SIGNUP_PATH,
    ROLE_URL: "https://api.stg.netobjex.com/api/PublicAPI/getEnum?name=ROLE",
    ACTIVATE_USER_URL: PrivateConstants.DOMAIN + PrivateConstants.ACTIVATE_USER_PATH,
    MY_ACCOUNT_URL: PrivateConstants.DOMAIN,
    UPDATE_ACCOUNT_URL: PrivateConstants.DOMAIN,
    PASSWORD_RESET_URL: PrivateConstants.DOMAIN + PrivateConstants.PASSWORD_RESET_PATH,
    PASSWORD_CONFIRM_RESET_URL: PrivateConstants.DOMAIN + PrivateConstants.PASSWORD_CONFIRM_RESET_PATH,
    PASSWORD_CHANGE_URL: PrivateConstants.DOMAIN + PrivateConstants.PASSWORD_CHANGE_PATH,
    INVITE_FRIEND_URL:"",
    AUTHORIZATION : "Authorization",
    CONTENT_TYPE : "Content-Type",
    XAPIAUTHKEY: "<PUT AUTH KEY HERE>",

     // API Methods
     POST : "post",
     GET : "get",
     PATCH :"patch"
}

export default  APIConstants;