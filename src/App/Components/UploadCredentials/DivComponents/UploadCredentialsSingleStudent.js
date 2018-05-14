import React,{Component } from 'react'
import {ReactDOM} from 'react-dom'
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import BasicDropdown from '../../Fields/BasicDropdown/BasicDropdown';
import uploadCredentialModel from '../../../DataModels/UploadCredentialModel';

export default class UploadCredentialsInviteFriends extends React.Component{
    menuitems = {"2015":"11", "2016":"12", "2017":"13"};
    degreemenuitems = {"BSc":1, "MSc":2, "MCA":3 ,"B.Tech":4}
    render() {
        return(
            <div className="upload-credential">
                <form className="form-inline">
                    <BasicTextfield
                        controlID = "sfirstname" 
                        labelName = "First Name"
                        controlType = "text"
                        placeholder =  {"First Name"}
                        className ="fnametext"
                        saveText = {(text) => this.onChangeStudentFirstName(text)}
                        //errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                    />
                    <BasicTextfield
                        controlID = "smiddlename" 
                        labelName = "Middle Initial (Optional)"
                        controlType = "text"
                        placeholder = {"Middle Initial"}
                        saveText = {(text) => this.onChangeStudentMiddleName(text)}
                        //errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                    />
                    <BasicTextfield
                        controlID = "slastname" 
                        labelName = "Last Name"
                        controlType = "text"
                        placeholder = {"Last Name"}
                        saveText = {(text) => this.onChangeLastName(text)}
                        //errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                    />
                       <BasicTextfield
                        controlID = "sschoolname" 
                        labelName = "School Name"
                        controlType = "text"
                        placeholder = {"School Name"}
                        //saveText = {(text) => this.onChangeEmail(text)}
                        //errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                        clsname = "schoolName-text-field"
                        classname = "school-text"
                    />
                    <BasicDropdown
                        controlID = "dropdown"
                        labelName = "Year started"
                        title = "- Select a Year -"
                       // id = "myrole"
                        menuitems = {this.menuitems}     
                    />
                     <BasicDropdown
                        controlID = "dropdown"
                        labelName = "Year Graduated"
                        title = "- Select a Year -"
                       // id = "myrole"
                        menuitems = {this.menuitems}     
                    />
                
                     <BasicTextfield
                        controlID = "sstudyarea" 
                        labelName = "Area of Study"
                        controlType = "text"
                        placeholder = {"Area of study"}
                        saveText = {(text) => this.onChangeAreaOfStudy(text)}
                        //errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                        className = "area-of-study-text-field"
                    />
                    <BasicDropdown
                        controlID = "dropdown"
                        labelName = "Degree Awarded"
                        title = "- Select a Degree -"
                       // id = "myrole"
                        menuitems = {this.degreemenuitems}     
                    />
                    <BasicTextfield
                        controlID = "sdateawarded" 
                        labelName = "Date Awarded"
                        controlType = "text"
                        placeholder = {"MM/DD/YYYY"}
                    />
                </form>
    
            </div>
        );
    }

    onChangeStudentFirstName(text)
    {
        let studentsFirstNameValid = uploadCredentialModel.validateText(text);
        uploadCredentialModel.setFirstName(text);
        return studentsFirstNameValid;
    }

    onChangeStudentMiddleName(text){
           let studentsMiddleNameValid = uploadCredentialModel.validateText(text);
           uploadCredentialModel.setMiddleName(text);
           return studentsMiddleNameValid;
    }

    onChangeLastName(text)
    {
        let studentsLastNameValid = uploadCredentialModel.validateText(text);
        uploadCredentialModel.setLastName(text);
        return studentsLastNameValid;
    }
    onChangeAreaOfStudy(text)
    {
        let areaofStudyValid = uploadCredentialModel.validateText(text);
        uploadCredentialModel.setAreaofStudy(text);
        return areaofStudyValid;
    }
}
