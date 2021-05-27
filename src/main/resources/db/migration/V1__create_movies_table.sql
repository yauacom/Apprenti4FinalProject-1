CREATE TABLE movies (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
description VARCHAR NOT NULL,
img_url VARCHAR(255) NOT NULL
);

INSERT INTO movies (title,genre,description,img_url) VALUES
('Star Wars: The Last Jedi', 'science fiction', 'The Last Jedi follows Rey as she seeks the aid of Luke Skywalker, in hopes of turning the tide for the Resistance in the fight against Kylo Ren and the First Order, while General Leia Organa, Finn, and Poe Dameron attempt to escape a First Order attack on the dwindling Resistance fleet.', 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/starwars-lastjedi-banner-frontpage.jpg'),
('Big Hero 6', 'comedy', 'Robotics nerd Hiro Hamada discovers an inflatable health care robot Baymax created in the past by his brother, Tadashi. After a terrible life-changing accident, Hiro and Baymax team up with four other nerds and save their hometown San Fransokyo from an evil super villain trying to take over with invention of Hiro.', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/22CA51EE6F38A19EF87B03D4B2F976994FF6E0996738F636E731666F3EF74615/scale?width=1200&aspectRatio=1.78&format=jpeg'),
('Pokémon Detective Pikachu', 'Fantasy', 'The story begins when ace detective Harry Goodman goes mysteriously missing, prompting his 21-year-old son Tim to find out what happened. Aiding in the investigation is former Pokémon partner of Harry, Detective Pikachu: a hilariously wise-cracking, adorable super-sleuth who is a puzzlement even to himself.', 'https://i0.wp.com/moviebabble.com/wp-content/uploads/2019/05/Detective-Pikachu.jpg?fit=857%2C450&ssl=1'),
('Jurassic World: Dominion', 'adventure', 'Jurassic World: Dominion is an upcoming American science fiction adventure film directed by Colin Trevorrow, who wrote the screenplay with Emily Carmichael, based on a story by Trevorrow and his writing partner, Derek Connolly. ... The film was being planned as early as 2014, part of a future Jurassic World trilogy.', 'https://theglobalcoverage.com/wp-content/uploads/2020/02/Jurassic-World-3-Logo-T-Rex-770x513_resize_61.jpg');
