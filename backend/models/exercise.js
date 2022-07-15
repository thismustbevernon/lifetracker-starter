const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Exercise {
  static async createExercise({ exercise, user }) {
    const requiredFields = ["name", "category", "duration", "intensity"];
    requiredFields.forEach((field) => {
      if (!exercise.hasOwnProperty(field)) {
        throw new BadRequestError(
          `Required field - ${field} - missing from request body`
        );
      }
    });
    const results = await db.query(
      `
            INSERT INTO exercise (name, category, duration, intensity, user_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
            RETURNING id, name, category, duration, intensity, user_id, created_at
            `,
      [
        exercise.name,
        exercise.category,
        exercise.duration,
        exercise.intensity,
        user.email,
      ]
    );
    return results.rows[0];
  }

  static async fetchExerciseById(exerciseId) {
    const results = await db.query(
      `
            SELECT  e.id,
                    e.name,
                    e.category,
                    e.duration,
                    e.intensity,
                    u.email AS "user_email",
                    e.user_id AS "user_id",
                    e.created_at AS "created_at"
            FROM exercise AS e
                JOIN users AS u ON u.id = e.user_id
            WHERE e.id = $1
            `,
      [exerciseId]
    );
    const exercise = results.rows[0];
    if (!exercise) {
      throw new NotFoundError();
    }
    return exercise;
  }

  static async listExerciseForUser({ user_id }) {
    const results = await db.query(
      `
            SELECT  e.id,
                    e.name,
                    e.category,
                    e.duration,
                    e.intensity,
                    u.email AS "user_email",
                    e.user_id AS "user_id",
                    e.created_at AS "created_at"
            FROM exercise AS e
                JOIN users AS u ON u.id = e.user_id
            WHERE e.user_id = $1
            ORDER BY e.created_at DESC
            `,
      [user_id]
    );
    console.log(results.rows);
    return results.rows;
  }
}

module.exports = Exercise;









// import db from "../db.js";

// export class Exercise {
//   static async listUserExercise(user) {
//     const result = await db.query(
//       ` SELECT * 
//               FROM exercise
//               WHERE user_id = $1;
//             `,
//       [user.id]
//     );

//     return result.rows;
//   }

//   static async createUserExercise(user) {
   
//     const userEmail = user.user.email;
//     const exercise = user.exercise;


//     await db.query(
//       `
//             INSERT INTO exercises (username, name, category, duration, intensity)
//             VALUES ((SELECT username FROM users WHERE email = $1), $2, $3, $4, $5);
//         `,
//       [
//         userEmail,
//         exercise.name,
//         exercise.category,
//         exercise.duration,
//         exercise.intensity,
//       ]
//     );
//   }
// }
