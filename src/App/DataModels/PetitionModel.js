import STRINGS from '../../App/Constants/StringConstants';

class PetitionModel {
    universityName = '';
    city = '';
    ustate = '';
    country = '';
    zipcode = '';
    firstname = '';
    lastname = '';
    studentId = '';
  

    setFirstName(text) {
        this.firstname = text;
    }

    validateText(text) {
        var letters = "^[a-zA-Z]+$";
        let fieldOk = text.search(letters) != -1;

        return fieldOk;
    }

    setLastName(text) {
        this.lastname = text;
    }

    setUniversityName(text) {
        this.universityName = text;
    }

    setCity(text) {
        this.city = text;
    }

    setState(text) {
        this.ustate = text;
    }

    setStudentId(text) {
        this.studentId = text;
    }

    setCountry(text) {
        this.comcountry = text;
    }

    setZipCode(text) {
        this.zipcode = text;
    }

    validateZipCode(text){
        let fieldOk = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(text);
        return fieldOk;
    }

    validateAllFields() {
        let errorFieldList = "";
        let err = "";
        let allFieldsOk = false;

        allFieldsOk = this.validateText(this.universityName);
        
        if (allFieldsOk == true) {
            allFieldsOk = this.validateText(this.firstname);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if (allFieldsOk == true) {
            allFieldsOk = this.validateText(this.lastname);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }
        
        if (allFieldsOk == true) {
            allFieldsOk = this.v(this.city);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateText(this.ustate);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateText(this.country);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateText(this.zipcode);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }

        if( allFieldsOk == true) {
            allFieldsOk = this.validateText(this.studentId);
        } else {
            allFieldsOk = false;
            return allFieldsOk;
        }
        return allFieldsOk;
    }

    formPetitionRequest() {
        return petitiontModel;
    }
}
const petitiontModel = new PetitionModel();
export default petitiontModel;
  