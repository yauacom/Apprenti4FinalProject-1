CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
rating INTEGER NOT NULL,
comment TEXT,
movie_id INTEGER REFERENCES movies(id)
);