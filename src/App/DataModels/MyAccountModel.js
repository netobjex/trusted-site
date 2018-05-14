import STRINGS from '../../App/Constants/StringConstants';

class MyAccountModel {
    firstname = '';
    lastname = '';
    email = '';
    password = '';
    newPassword = '';
    confirmNewPassword = '';
    role = '';
    roleId = '';
    company = '';
    bioDescription = '';

    setFirstName(text) {
        this.firstname = text;
    }

    validateEmpty(text) {
        let fieldOk = false;
        if (text != null && text != '') {
            fieldOk = true;
        }
        return fieldOk;
    }

    validateText(text) {
        var letters = "^[a-zA-Z]+$";
        let fieldOk = text.search(letters) != -1;

        return fieldOk;
    }

    setLastName(text) {
        this.lastname = text;
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

    validatePassword(text) {
        let fieldOk = text.length >= 6;
        return fieldOk;
    }

    setNewPassword(text) {
        this.newPassword = text;
    }

    setConfirmNewPassword(text) {
        this.confirmNewPassword = text;
    }

    setBioDescription(text) {
        this.bioDescription = text;
    }

    validatePasswordMatch(newPassword, confirmNew) {
        let fieldOk = (newPassword == confirmNew);
        return fieldOk;
    }

    setRole(role) {
        console.log("setting role:", role)
        this.role = role;
    }

    setRoleId(roleId) {
        this.roleId = roleId;
    }

    setCompany(text) {
        this.company = text;
    }

    setBiodescription(text) {
        this.bioDescription = text;
    }

    validateRole(text) {
        let fieldOk = (text !== null && text !== undefined && text != "" && text !== "- Select One -" );
        return fieldOk;
    }

    validateAllFields() {
        let errorFieldList = "";
        let err = "";
        let allFieldsOk = false;

        allFieldsOk = this.validateText(this.firstname);
        if (allFieldsOk == true) {
            allFieldsOk = this.validateText(this.lastname);
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
        
        /*if (allFieldsOk == true) {
            allFieldsOk = this.validatePassword(this.password);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }*/

        if( allFieldsOk == true) {
            allFieldsOk = this.validateRole(this.role);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateText(this.company);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateText(this.bioDescription);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        return allFieldsOk;
    }

    formUpdateMyAccountRequest() {
        return myaccountModel;
    }
}
const myaccountModel = new MyAccountModel();
export default myaccountModel;
  