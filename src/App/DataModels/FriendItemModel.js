import STRINGS from '../../App/Constants/StringConstants';

class FriendItemModel {
    first_name = '';
    last_name = '';
    email = '';

    constructor() {
    }

    setFirstName(text) {
        this.first_name = text;
    }

    validateText(text) {
        var letters = "^[a-zA-Z]+$";
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

    validateAllFields() {
        let errorFieldList = "";
        let err = "";
        let allFieldsOk = false;

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
        return allFieldsOk;
    }
}

const friendItemModel = new FriendItemModel();
export default friendItemModel;

  