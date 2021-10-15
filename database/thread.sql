
CREATE TABLE thread(
    threadName VARCHAR(50) NOT NULL,
    threadTree VARCHAR(100) NOT NULL,
    threadPic VARCHAR(200) DEFAULT "",
    threadOwner VARCHAR(200) DEFAULT "",
    PRIMARY KEY(threadName),
    FOREIGN KEY(threadOwner) REFERENCES user(email)
);

