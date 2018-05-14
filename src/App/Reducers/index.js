import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
//import SignupReducer from './SignupReducer';
import MyAccountReducer from './MyAccountReducer';
import InviteFriendsReducer from './InviteFriendsReducer';

const reducers = combineReducers({
    LoginReducer,
    MyAccountReducer,
    InviteFriendsReducer
});
export default reducers;