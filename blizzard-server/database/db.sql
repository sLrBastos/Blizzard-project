CREATE TABLE accessToken (
    access_token VARCHAR(255),
    token_type VARCHAR(255),
    duration INT,
    sub VARCHAR(255) 

) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO 
    accessToken (access_token, token_type, duration, sub)
VALUES
    (
        "EUqZhzRZJTMueMU0ZYyRQU2sihyhoYBdv2",
        "bearer",
        86399,
        "bbdd3352857a4f75832b4c5e3d0b5774"
    )