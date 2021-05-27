package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="movies")
@AllArgsConstructor
public class Movie {

    @Id
    @SequenceGenerator(name = "movies_id_generator", sequenceName = "movies_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movies_id_generator")
    @Column(name="id")
    private Integer id;

    @Column(name="title")
    private String title;

    @Column(name="genre")
    private String genre;

    @Column(name="img_url")
    private String imgUrl;

    @Column(name="description")
    private String description;

    @OneToMany(mappedBy = "movie", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties("movie")
    private List<Review> reviews;

    public Movie(String title, String genre, String imgUrl, String description) {
        this.title = title;
        this.genre = genre;
        this.imgUrl = imgUrl;
        this.description = description;
    }
}
