
class CacheResponse {
    loginResponse = null;
    signupResponse = null;
    myAccountResponse = null;
    roleResponse = null;
    loginToken = "";
    userId = "";
    uploadCredentialFile = null;

    saveLoginResponse(response) {
        this.loginResponse = response;
        this.loginToken = response.token;
        this.userId = response.uid;
        /*console.log("loginResponse:", this.loginResponse);
        console.log("token:", this.loginToken);
        console.log("userId:", this.userId);*/

        localStorage.setItem('loginResponse', JSON.stringify(response));
        localStorage.setItem('loginToken', JSON.stringify(response.token));
        localStorage.setItem('userId', JSON.stringify(response.uid));

        console.log("saved loginResponse:", JSON.parse(localStorage.getItem('loginResponse')));
        console.log("saved loginToken:", JSON.parse(localStorage.getItem('loginToken')));
        console.log("saved userId:", JSON.parse(localStorage.getItem('userId')));
    }

    saveCredentialFile(file) {
        localStorage.setItem('uploadCredential', file);
    }

    getCredentialFile(){
        let file = localStorage.getItem('uploadCredential');
        console.log("file credential:", file);
        return (file);
    }

    saveSchoolSealFile(file) {
        console.log('save school seal file'+file);
        localStorage.setItem('schoolseal', file);
    }

    getSchoolSealFile(){
        let file = localStorage.getItem('schoolseal');
        console.log("file schoolseal:", file);
        return (file);
    }

    getLoginResponse() {
        let response = JSON.parse(localStorage.getItem('loginResponse'));
        //console.log("loginResponse:", response);
        return (response);
    }

    getLoginToken() {
        let response = JSON.parse(localStorage.getItem('loginToken'));
        console.log("loginToken:", response);
        return (response);
    }

    getLoginUserId() {
        let response = JSON.parse(localStorage.getItem('userId'));
        console.log("userId:", response);
        return (response);
    }

    saveSignupResponse(response) {
        this.signupResponse = response;
    
        localStorage.setItem('signupResponse', JSON.stringify(response));

        console.log("saved signupResponse:", JSON.parse(localStorage.getItem('signupResponse')));
    }

    getSignupResponse() {
        let response = JSON.parse(localStorage.getItem('signupResponse'));
        console.log("signupResponse:", response);
        return (response);
    }

    saveGetMyAccountResponse(response) {
        this.getMyAccountResponse = response;
        
        localStorage.setItem('myAccountResponse', JSON.stringify(response));

        console.log("saved myAccountResponse:", JSON.parse(localStorage.getItem('myAccountResponse')));
    }

    getGetMyAccountResponse() {
        let response = JSON.parse(localStorage.getItem('myAccountResponse'));
        console.log("myAccountResponse:", response);
        return (response);
    }

    saveUpdateMyAccountResponse(response) {
        this.updateMyAccountResponse = response;

        localStorage.setItem('myAccountResponse', JSON.stringify(response));

        console.log("saved myAccountResponse:", JSON.parse(localStorage.getItem('myAccountResponse')));
    }

    saveGetRoleResponse(response) {
        this.roleResponse = response;
  
        localStorage.setItem('roleResponse', JSON.stringify(response));

        console.log("saved roleResponse:", JSON.parse(localStorage.getItem('roleResponse')));
    }

    getGetRoleResponse() {
        let response = JSON.parse(localStorage.getItem('roleResponse'));
        console.log("roleResponse:", response);
        return (response);
    }
}
const cachResponse = new CacheResponse();
export default cachResponse;