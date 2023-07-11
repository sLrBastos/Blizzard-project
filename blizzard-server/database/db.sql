CREATE TABLE accessToken (
    access_token VARCHAR(255),
    token_type VARCHAR(255),
    duration INT,
    sub VARCHAR(255) 

) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO 
    accessToken (access_token)
VALUES
    (
        "example-token"
    );



CREATE TABLE mounts (
    key_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    id INT
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE refs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    href VARCHAR(255)
)