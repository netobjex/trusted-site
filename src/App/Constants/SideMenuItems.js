
const MENU_ITEMS = [
    {key:"HOME",path:"/home", iconName:"/Icon/Account.png", selectedIconName:"/Icon/Current/Account.png", action:"toHome", selected: false},
    {key:"UPLOAD CREDENTIALS",path:"/uploadCredential", iconName:"/Icon/Upload.png", selectedIconName:"/Icon/Current/Upload.png", action:"toUpload", selected: false},
    {key:"SEARCH CREDENTIALS",path:"/searchCredential", iconName:"/Icon/Search.png", selectedIconName:"/Icon/Current/Search.png", action:"toSearchCredential", selected: false},
    {key:"MY WALLET",path:"/wallet", iconName:"/Icon/Wallet.png", selectedIconName:"/Icon/Current/Wallet.png", action:"toWallet", selected: false},
    {key:"MY UNIVERSITIES",path:"/myuniverstities", iconName:"/Icon/University.png", selectedIconName:"/Icon/Current/University.png", action:"toUniversity", selected: false},
    {key:"MY CREDENTIALS",path:"/mycredentials", iconName:"/Icon/Credential.png", selectedIconName:"/Icon/Current/Credential.png", action:"toMyCredential", selected: true},
    {key:"NEW REQUESTS",path:"/newrequest", iconName:"/Icon/Requests.png", selectedIconName:"/Icon/Current/Requests.png", action:"toNewRequest", selected: false},
    {key:"INVITE FRIENDS",path:"/invitefriends", iconName:"/Icon/Invite.png", selectedIconName:"/Icon/Current/Invite.png", action:"toInviteFriends", selected: false},
    {key:"MY ACCOUNT",path:"/myaccount", iconName:"/Icon/Account.png", selectedIconName:"/Icon/Current/Account.png", action:"toMyAccount", selected: false},
    {key:"SIGNOUT",path:"/", iconName:"/Icon/SignOut.png", selectedIconName:"/Icon/SignOut.png", action:"signout"},

];


export default MENU_ITEMS;