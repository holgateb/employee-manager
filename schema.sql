DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
USE DATABASE business_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    content TEXT,
    author_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (author_id)
    REFERENCES users (id)
    ON DELETE CASCADE
);
