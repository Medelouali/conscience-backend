
CREATE TABLE user(
    email VARCHAR(200) NOT NULL;
    username VARCHAR(50) NOT NULL;
    passwd VARCHAR(200) NOT NULL;
    bio VARCHAR(100) DEFAULT "",
    job VARCHAR(200) DEFAULT "",
    pic VARCHAR(200) DEFAULT "",
    PRIMARY KEY(email)
);