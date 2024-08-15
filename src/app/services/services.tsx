import googleSignIn from "./googleSignIn/googleSignIn";
import passwordSignIn from "./passwordSignIn/passwordSignIn";
import passwordLogIn from "./passwordLogIn/passwordLogIn";
import vibeIt from "./search/vibeIt";
import addToWishList from "./WishList/addToWishlist";
import getWishlist from "./WishList/getWishlist";
import removeFromWishlist from "./WishList/removeFromWishlist";
import getUserDetails from "./authentication/getUserDetails";
import getAccessToken from "./authentication/getAccessToken";
import logOut from "./authentication/logOut";
import isMobile from "./deviceInfo/isMobile";
import isUserLoggedIn from "./authentication/isUserLoggedIn";
import clicked from "./monitoring/clicked";
import redirect from "./monitoring/redirect";
const services={
    googleSignIn:googleSignIn,
    passwordSignIn: passwordSignIn,
    passwordLogIn: passwordLogIn,
    vibeIt:vibeIt,
    addToWishList:addToWishList,
    getWishlist:getWishlist,
    removeFromWishlist:removeFromWishlist,
    getUserDetails:getUserDetails,
    getAccessToken: getAccessToken,
    logOut:logOut,
    isMobile:isMobile,
    isUserLoggedIn: isUserLoggedIn,
    clicked: clicked,
    redirect: redirect
}

export default services