// define login and register page route
const express = require("express");
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    const publicUser = await User.makePublicUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;










// const express = require("express");
// const User = require("../models/user");
// const router = express.Router();

// router.post("/login", async (req, res, next) => {
//   try {
//     //take the user email and password and attempting to authentocate them

//     const user = await User.login(req.body);
//     return res.status(200).json({ user });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// router.post("/register", async (req, res, next) => {
//   try {
//     //take the users email,passowrd,rsvp status and the number of guests and create a new user in our database
//     const user = await User.register(req.body);
//     return res.status(201).json({ user });
//   } catch (err) {
//     // next(err)
//     res.status(400).send(err);
//   }
// });

// module.exports = router;
