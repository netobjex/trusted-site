import STRINGS from '../../App/Constants/StringConstants';

class SignupModel {
    username = '';
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    repeatPassword = '';
    role = '';
    roleId = '';
    errorFieldList = '';

    setFirstName(text) {
        this.first_name = text;
    }

    validateText(text) {
        var letters = "[a-zA-Z]+$";
        let fieldOk = text.search(letters) != -1;

        return fieldOk;
    }

    setLastName(text) {
        this.last_name = text;
    }

    setEmail(text) {
        this.email = text;
    }

    validateEmail(text) {
        let pattern = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";

        let fieldOk = text.search (pattern) != -1;
        return fieldOk;
    }

    setPassword(text) {
        this.password = text;
    }

    setRepeatPassword(text) {
        this.repeatPassword = text;
    }

    validatePassword(text) {
        let fieldOk = text.length >= 6;
        return fieldOk;
    }

    validatePasswordMatch(password, repeatPassword) {
        let fieldOk = (password == repeatPassword);
        return fieldOk;
    }

    setRole(role) {
        this.role = role;
    }

    setRoleId(roleId) {
        this.roleId = roleId;
    }

    validateRole(text) {
        let fieldOk = (text !== null && text !== undefined && text != "" && text !== "- Select One -" );
        return fieldOk;
    }

    validateAllFields() {
        
        let err = "";
        let allFieldsOk = false;
  
        err = this.validateText(this.first_name) ? '' : STRINGS.TEXT_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        err = this.validateText(this.last_name) ? '' : STRINGS.TEXT_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        err = this.validateEmail(this.email) ? '' : STRINGS.EMAIL_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        err = this.validatePassword(this.password) ? '' : STRINGS.PASSWORD_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        err = this.validatePassword(this.repeatPassword) ? '' : STRINGS.PASSWORD_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + " " + err;

        err = this.validatePasswordMatch(this.password, this.repeatPassword) ? '' : STRINGS.PASSWORDS_MISMATCH_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        err = this.validateRole(this.role) ? '' : STRINGS.MUST_SELECT_ROLE_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        allFieldsOk = this.validateText(this.first_name);
        if (allFieldsOk == true) {
            allFieldsOk = this.validateText(this.last_name);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if (allFieldsOk == true) {
            allFieldsOk = this.validateEmail(this.email);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }
        
        if (allFieldsOk == true) {
            allFieldsOk = this.validatePassword(this.password);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if (allFieldsOk == true) {
            allFieldsOk = this.validatePassword(this.repeatPassword);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if(allFieldsOk == true) {
            allFieldsOk = this.validatePasswordMatch(this.password, this.repeatPassword);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateRole(this.role);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        return allFieldsOk;
    }

    formSignupRequest() {
        this.username = this.first_name;
        return signupModel;
    }
}
const signupModel = new SignupModel();
export default signupModel;
  