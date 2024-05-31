const express= require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userontroller = require("../controllers/users.js");


router.route("/signup")
    .get( userontroller.renderSignupForm)
    .post( wrapAsync( userontroller.signup ));

router.route("/login")
    .get( userontroller.renderLoginForm )
    .post( saveRedirectUrl,
        passport.authenticate("local",
        { failureRedirect: '/login',failureFlash: true }),
        userontroller.login 
);

router.get("/logout" , userontroller.logout );

module.exports = router;