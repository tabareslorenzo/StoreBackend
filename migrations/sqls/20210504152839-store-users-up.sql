/* Replace with your SQL commands */
CREATE TABLE users(
    id SERIAL PRIMARY  KEY,
    username VARCHAR(150) NOT NULL,
    hashed_password VARCHAR(700) NOT NULL
);