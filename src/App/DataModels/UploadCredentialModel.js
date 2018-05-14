import STRINGS from '../../App/Constants/StringConstants';

class UploadCredentialModel {
    file = null;
    schoolName = '';
    degreeAwarded = '';
    dateAwarded = '';
    sfirst_name='';
    smiddle_name = '';
    slast_name = '';
    area_of_study = '';

    setFirstName(text)
    {
        this.sfirst_name = text;
    }

    setMiddleName(text)
    {
       this.smiddle_name = text;
    }

    setLastName(text)
    {
        this.slast_name = text;
    }
    setAreaofStudy(text)
    {
        this.area_of_study = text;
    }
    setFile(file) {
        this.file = file;
    }

    setSchoolName(text) {
        this.schoolName = text;
    }

    setDegreeAwarded(text) {
        this.degreeAwarded = text;
    }

    setDateAwarded(text) {
        this.dateAwarded = text;
    }

    validateText(text) {
        var letters = "^[a-zA-Z]+$";
        let fieldOk = text.search(letters) != -1;

        return fieldOk;
    }
}
const uploadCredentialModel = new UploadCredentialModel();
export default uploadCredentialModel;
  