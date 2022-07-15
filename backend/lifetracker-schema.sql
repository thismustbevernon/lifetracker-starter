-- CREATE TABLE user (
--   id          SERIAL PRIMARY KEY,
--   password    TEXT NOT NULL,
--   name        TEXT NOT NULL,
--   username    TEXT NOT NULL UNIQUE,
--   email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
--   is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
--   created_at  TIMESTAMP NOT NULL DEFAULT NOW()
-- );


CREATE TABLE users(
 id          SERIAL PRIMARY KEY,
 username    TEXT NOT NULL UNIQUE,
 password    TEXT NOT NULL,
 first_name  TEXT NOT NULL,
 last_name   TEXT NOT NULL,
 email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
 created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
 updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
 
CREATE TABLE nutrition (
 id          SERIAL PRIMARY KEY,
 name        TEXT NOT NULL,
 category    TEXT NOT NULL,
 quantity    INTEGER NOT NULL,
 calories    INTEGER NOT NULL,
 image_url   TEXT NOT NULL,
 user_id     INTEGER NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
 created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);



CREATE TABLE exercises (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER NOT NULL,
  FOREIGN KEY     (user_id) REFERENCES users(id) ON DELETE CASCADE,
  name            TEXT NOT NULL, 
  category        TEXT NOT NULL,
  duration        INTEGER NOT NULL,
  intensity       INTEGER NOT NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);



CREATE TABLE sleep (
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER NOT NULL,
    FOREIGN KEY     (user_id) REFERENCES users(id) ON DELETE CASCADE,
    start_time      TIMESTAMP NOT NULL DEFAULT NOW(),
    end_time        TIMESTAMP NOT NULL DEFAULT NOW()
);