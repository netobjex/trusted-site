import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
//import routes from './App/Routes';

import LoginContainer from './App/Components/Login/LoginContainer';
//import SideMenu from './App/Components/SideMenu/SideMenu';
import MyAccountContainer from './App/Components/MyAccount/MyAccountContainer';
import InviteFriendsContainer from './App/Components/InviteFriends/InviteFriendsContainer';
import NewRequestContainer from './App/Components/NewRequest/NewRequestContainer';
import MyCredentials from './App/Components/MyCredentials/MyCredentialsContainer';
import MyPublicProfileContainer from './App/Components/Profile/MyPublicProfileContainer';
import SearchCredential from './App/Components/SearchCredentials/SearchCredentialContainer';
import MyUniversities from './App/Components/MyUniversities/MyUniversitiesContainer';

import PetitionContainer from './App/Components/Petitions/PetitionContainer';
import NewPetition from './App/Components/Petitions/NewPetition';
//import UploadCredentialsContainer from './App/Components/UploadCredentials/UploadCredentialsContainer';

import HomeScreen from './App/Components/Home/HomeScreenContainer';
import UploadCredential from './App/Components/UploadCredentials/UploadCredentialsContainer'
import MyWallet from './App/Components/Wallet/WalletContainer'
// import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  /*render() {
    return (
       <Router>
          <div>
             <Route path="/" exact component={Login} />
          </div>
       </Router>
    );
 }*/

 render() {
  return (
     <Router>
        <div>
           <Route exact path={"/"} component={LoginContainer} />
           <Route path={"/myaccount"} exact component={MyAccountContainer} />
           <Route path={"/invitefriends"} exact component={InviteFriendsContainer} />
           <Route path={"/newrequest"} exact component={NewRequestContainer} />
           <Route path={"/mycredentials"} exact component={MyCredentials} />
           <Route path={"/myprofile"} exact component={MyPublicProfileContainer} />
           <Route path={"/searchCredential"} exact component={SearchCredential} />
           <Route path={"/myuniverstities"} exact component={MyUniversities} />
           <Route path={"/petitions"} exact component={PetitionContainer} />
           <Route path={"/newpetition"} exact component={NewPetition} />
           <Route path={"/home"} exact component={HomeScreen} />
           <Route path={"/uploadCredential"} exact component ={UploadCredential}/>
           <Route path={"/wallet"} exact component ={MyWallet}/>

        </div>
     </Router>
  );
}

  /*render() {//
     return (
        <Router>
           <div>
              <h2>TrustED</h2>
              <ul>
                 <li><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/Login'}>Login</Link></li>
              </ul>
              <hr />
              
              <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/Login' component={Login} />
              </Switch>
           </div>
        </Router>
     );
  }*/
}
export default App;
//ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));