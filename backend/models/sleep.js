const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Sleep {
  static async createSleep({ sleep, user }) {
    const requiredFields = ["start_time", "end_time"];
    requiredFields.forEach((field) => {
      if (!sleep.hasOwnProperty(field)) {
        throw new BadRequestError(
          `Required field - ${field} - missing from request body`
        );
      }
    });
    const results = await db.query(
      `
            INSERT INTO sleep (start_time, end_time, user_id)
            VALUES ($1, $2, (SELECT id FROM users WHERE email = $3))
            RETURNING id, start_time, end_time, created_at, user_id
            `,
      [sleep.start_time, sleep.end_time, user.email]
    );
    return results.rows[0];
  }

  static async fetchSleepById(sleepId) {
    const results = await db.query(
      `
            SELECT  s.id,
                    s.start_time AS "start_time",
                    s.end_time AS "end_time",
                    u.email AS "user_email",
                    s.user_id AS "user_id",
                    s.created_at AS "created_at"
            FROM sleep AS s
                JOIN users AS u ON u.id = s.user_id
            WHERE s.id = $1
            `,
      [sleepId]
    );
    const sleep = results.rows[0];
    if (!sleep) {
      throw new NotFoundError();
    }
    return sleep;
  }

  static async listSleepForUser({ user_id }) {
    const results = await db.query(
      `
            SELECT  s.id,
                    s.start_time AS "start_time",
                    s.end_time AS "end_time",
                    u.email AS "user_email",
                    s.user_id AS "user_id",
                    s.created_at AS "created_at"
            FROM sleep AS s
                JOIN users AS u ON u.id = s.user_id
            WHERE s.user_id = $1
            ORDER BY s.created_at DESC
            `,
      [user_id]
    );
    return results.rows;
  }
}

module.exports = Sleep;