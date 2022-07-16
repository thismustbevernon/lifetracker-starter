const express = require("express");
const Sleep = require("../models/sleep");
const security = require("../middleware/security");
const permissions = require("../middleware/permissions");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const sleepss = await Sleep.listSleepForUser({
      user_id: req.headers.user_id,
    });
    return res.status(200).json({ sleepss });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {

    const { user } = res.locals;
    const sleep = await Sleep.createSleep({ user, sleep: req.body });
    return res.status(201).json({ sleep });
  } catch (err) {
    next(err);
  }
});

router.get("/:sleepId", async (req, res, next) => {
  try {
   
    const { sleepId } = req.params;
    const sleep = await Sleep.fetchSleepById(sleepId);
    return res.status(200).json({ sleep });
  } catch (err) {
    next(err);
  }
});

module.exports = router;