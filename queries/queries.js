

const createThread=`
    CREATE TABLE thread(
        threadName VARCHAR(50) NOT NULL,
        threadTree VARCHAR(100) NOT NULL,
        threadPic VARCHAR(200) DEFAULT "",
        threadOwner VARCHAR(200) NOT NULL,
        PRIMARY KEY(threadName),
        FOREIGN KEY(threadOwner) REFERENCES user(email)
    );
`;

const createUser=`
    CREATE TABLE user(
        email VARCHAR(200) NOT NULL,
        username VARCHAR(50) NOT NULL,
        passwd VARCHAR(200) NOT NULL,
        bio VARCHAR(100) DEFAULT "",
        job VARCHAR(200) DEFAULT "",
        pic VARCHAR(200) DEFAULT "",
        PRIMARY KEY(email)
    );
`;
const addThread=(name, tree, pic, owner)=>{
    return `INSERT INTO thread(threadName, threadTree, threadPic, threadOwner) 
            VALUES("${name}", "${tree}", "${pic}", "${owner}");`;
};
module.exports={ createUser, createThread, addThread };