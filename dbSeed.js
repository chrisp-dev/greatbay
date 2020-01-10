DROP DATABASE IF EXISTS`greatbay_db`;
CREATE DATABASE IF NOT EXISTS`greatbay_db`;

USE`greatbay_db`;

CREATE TABLE IF NOT EXISTS`items`(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    initial_bid INT NOT NULL,
    highest_bid INT,
    PRIMARY KEY(id)
);

INSERT INTO items(name, initial_bid) VALUES('Hammer', 22);
INSERT INTO items(name, initial_bid) VALUES('Jack', 220);
INSERT INTO items(name, initial_bid) VALUES('Dorito', 2);
INSERT INTO items(name, initial_bid) VALUES('Sunchip', 33);