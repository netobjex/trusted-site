import STRINGS from '../../App/Constants/StringConstants';

class LoginModel {
    email = '';
    password = '';
    remember = "true";
    errorFieldList = '';

    setEmail(text) {
        this.email = text;
    }

    setPassword(text) {
        this.password = text;
    }

    validateEmail(text) {
        let pattern = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
        let fieldOk = text.search (pattern) != -1;
        return fieldOk;
    }

    validatePassword(text) {
        let fieldOk = text.length >= 6;
        return fieldOk;
    }

    validateAllFields() {
        let err = "";
        let allFieldsOk = false;

        err = this.validateEmail(this.email) ? '' : STRINGS.EMAIL_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;
        err = this.validatePassword(this.password) ? '' : STRINGS.PASSWORD_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        allFieldsOk = this.validateEmail(this.email);
        if (allFieldsOk == true) {
            allFieldsOk = this.validatePassword(this.password);
        }
        return allFieldsOk;
    }

    formLoginRequest() {
        //return {"email":this.email, "password": this.password, "remember":true};
        return loginModel;
    }

}
const loginModel = new LoginModel();
export default loginModel;
  