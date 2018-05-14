import * as LoginActions from './login';
import * as SignupActions from './signup';
import * as MyAccountActions from './myAccount';
import * as InviteFriends from './inviteFriend'

export default {...LoginActions, ...SignupActions, ...MyAccountActions, ...InviteFriends};