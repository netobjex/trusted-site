import STRINGS from '../../App/Constants/StringConstants';

class SearchModel {
    firstname = '';
    middlename = '';
    lastname = '';
    tedsRemaining = '';
    errorFieldList = '';

    setFirstName(text) {
        this.email = text;
    }

    setMiddleName(text) {
        this.middlename = text;
    }

    setLastName(text) {
        this.password = text;
    }

    validateText(text) {
        var letters = "[a-zA-Z]+$";
        let fieldOk = text.search(letters) != -1;

        return fieldOk;
    }

    validateAllFields() {
        let err = "";
        let allFieldsOk = false;

        err = this.validateText(this.firstname) ? '' : STRINGS.TEXT_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;
        err = this.validateText(this.lastname) ? '' : STRINGS.TEXT_VALIDATION_ERROR;
        this.errorFieldList = this.errorFieldList + ", " + err;

        allFieldsOk = this.validateText(this.firstname);
        if (allFieldsOk == true) {
            allFieldsOk = this.validateText(this.lastname);
        }
        return allFieldsOk;
    }

    formSearchRequest() {
        return searchModel;
    }

}
const searchModel = new SearchModel();
export default searchModel;
  