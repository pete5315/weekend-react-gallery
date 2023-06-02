-- CREATE DATABASE "react_gallery"

CREATE TABLE list (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INTEGER DEFAULT 0
);

INSERT INTO list ("path", "description")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'), ('images/scott-lord-PiqZfESKt3k-unsplash.jpg', 'Picture of a galaxy pulled from Unsplash');