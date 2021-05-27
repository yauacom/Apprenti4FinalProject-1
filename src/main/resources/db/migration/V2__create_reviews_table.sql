CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
rating INTEGER NOT NULL,
comment TEXT,
username VARCHAR(255) UNIQUE NOT NULL,
movie_id INTEGER REFERENCES movies(id)
);

INSERT INTO reviews (rating, comment, username, movie_id) VALUES
( 7, 'The divisive (among fans) new entry into the STAR WARS universe, THE LAST JEDI tears the myth to shreds, only to build it back up once more by end of film.', 'Kieran Stark', 1 ),
( 9, 'So around 6 years ago when it was released, i watched it with my mother, i love it, but back then i already forget about it. And a while ago i decides to rewatch the film, and man i love it even more. ', 'HannaXandra', 2),
( 6, 'While I do believe this is a good film, it definitely has its troubles. Above all, the writing is to be questioned here. Dialogue feels fake and lifeless, and is often rushed to skip to the next set piece. This is most apparent when looking at the humor in the movie, which is notably childish and exhaustive. ', 'Ben Flores-Hall', 2),
( 7, 'Just went to see Pokémon Detective Pikachu for its premiere in the UK. A fun-loving movie that can still be understood by those who aren not avid Pokémon fans if you were thinking otherwise.', 'Vo Tran', 3),
( 8, 'The movie was amazing. I gives you a nostalgic feeling.', 'Aswïn K P', 3),
( 2, 'Ryan Reynolds is a great actor but does get REALLY annoying playing the voice of Pikachu. Talks way too much and the voice just does not feel right. (Pikachu even says "damn" in this film!)', 'Tsz Hong Chan', 3);