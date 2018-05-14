import STRINGS from '../../App/Constants/StringConstants';

class NewRequestModel {
    employerName = '';
    sortOption = 'Newest';

    setFirstName(text) {
        this.employerName = text;
    }

    setSortOption(text) {
        this.sortOption = text;
    }
}

const newRequestModel = new NewRequestModel();
export default newRequestModel;