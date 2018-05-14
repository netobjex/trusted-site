import react, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import myaccountModel from '../../../DataModels/MyAccountModel';

export default class ModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { modal: false, newPassword: '', repeatPassword :''};
  
      this.toggle = this.toggle.bind(this);
      this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
      this.onChangeConfirmPasswordName = this.onChangeConfirmPasswordName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    onChangeNewPassword(text) {
        //Validation
        let passwordValid = myaccountModel.validatePassword(text);
        console.log("passwordValid:", passwordValid);
        myaccountModel.setNewPassword(text);
        return passwordValid;
      }
  

    onChangeConfirmPasswordName(text) {
        //Validation
        let passwdMatchValid = myaccountModel.validatePasswordMatch(myaccountModel.newPassword, text);
        console.log("passwordMatchValid:", passwdMatchValid);

        myaccountModel.setConfirmNewPassword(text);
        return passwdMatchValid;
    }

    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
            <h1>React Bootstrap Modal Example</h1>
          <Button color="success" onClick={this.toggle}>React Modal</Button>
          <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Enter New Password</ModalHeader>
            <ModalBody>
            <div className="row">
              <div className="form-group col-md-4">
              <label>Name:</label>
              <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
              <label>Team:</label>
                  <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
                 </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                <label>Country:</label>
                  <input type="text" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
                 </div>
                </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </form>
          </Modal>
          </div>
        
      );
    }
  }
  