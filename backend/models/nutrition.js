const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Nutrition {
  static async createNutrition({ nutrition, user }) {
    const requiredFields = [
      "name",
      "category",
      "quantity",
      "calories",
      "image_url",
    ];
    requiredFields.forEach((field) => {
      if (!nutrition.hasOwnProperty(field)) {
        throw new BadRequestError(
          `Required field - ${field} - missing from request body`
        );
      }
    });
    const results = await db.query(
      `
            INSERT INTO nutrition (name, category, quantity, calories, image_url, user_id)
            VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
            RETURNING id, name, category, quantity, calories, image_url, user_id, created_at
            `,
      [
        nutrition.name,
        nutrition.category,
        nutrition.quantity,
        nutrition.calories,
        nutrition.image_url,
        user.email,
      ]
    );
    return results.rows[0];
  }

  static async fetchNutritionById(nutritionId) {
    const results = await db.query(
      `
            SELECT  n.id,
                    n.name,
                    n.category,
                    n.quantity,
                    u.email AS "user_email",
                    n.calories,
                    n.image_url AS "image_url",
                    n.user_id AS "user_id",
                    n.created_at AS "created_at"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.id = $1
            `,
      [nutritionId]
    );
    const nutrition = results.rows[0];
    if (!nutrition) {
      throw new NotFoundError();
    }
    return nutrition;
  }

  static async listNutritionForUser({ user_id }) {
    const results = await db.query(
      `
            SELECT  n.id,
                    n.name,
                    n.category,
                    n.quantity,
                    u.email AS "user_email",
                    n.calories,
                    n.image_url AS "image_url",
                    n.user_id AS "user_id",
                    n.created_at AS "created_at"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.user_id = $1
            ORDER BY n.created_at DESC
            `,
      [user_id]
    );
    return results.rows;
  }
}

module.exports = Nutrition;