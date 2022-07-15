const express = require("express");
const Exercise = require("../models/exercise");
const security = require("../middleware/security");
const permissions = require("../middleware/permissions");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //return a json response back with all user-owned nutrition
    //in an array like { "nutritions": [...]}
    const exercises = await Exercise.listExerciseForUser({
      user_id: req.headers.user_id,
    });
    return res.status(200).json({ exercises });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    console.log("headers", req.headers);
    const nutritions = await Nutrition.listNutritionForUser({
      user_id: req.headers.user_id,
    });
    return res.status(200).json({ nutritions });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //accept a request body with one nutrition key maybe like
    //{"nutrition": {attributes of nutrition entry}}
    const { user } = res.locals;
    const exercise = await Exercise.createExercise({
      user,
      exercise: req.body,
    });
    return res.status(201).json({ exercise });
  } catch (err) {
    next(err);
  }
});

router.get("/:exerciseId", async (req, res, next) => {
  try {
    //return a json response back with one user-owned nutrition
    //in an oject like { "nutrition": {...}}
    const { exerciseId } = req.params;
    const exercise = await Exercise.fetchExerciseById(exerciseId);
    return res.status(200).json({ exercise });
  } catch (err) {
    next(err);
  }
});

module.exports = router;