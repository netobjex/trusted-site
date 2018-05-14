import friendItemModel from './FriendItemModel';

class FriendsModel {
    friends = [];

    addFriend(fname, lname, email) {
        let newItem = new friendItemModel();
        newItem.setFirstName(fname);
        newItem.setLastName(lname);
        newItem.setEmail(email);
        this.friends.push(newItem);
    }

    formInviteFriendsRequest() {
        return FriendsModel;
    }
}

const friendsModel = new FriendsModel();
export default friendsModel;