CREATE DATABASE postsdb;

CREATE TABLE posts(
    id VARCHAR PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);