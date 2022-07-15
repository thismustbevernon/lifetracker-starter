const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Activity {
  static async listActivityForUser({ user_id }) {
    const results = await db.query(
      `
            SELECT category, 
                   SUM(calories),
                   COUNT(name)
            FROM nutrition
            WHERE nutrition.user_id = $1
            GROUP BY category
            `,
      [user_id]
    );
    return results.rows;
  }
}

module.exports = Activity;