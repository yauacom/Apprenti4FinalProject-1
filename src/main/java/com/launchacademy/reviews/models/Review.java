package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="reviews")
public class Review {

    @Id
    @SequenceGenerator(name ="reviews_id_generator", sequenceName = "reviews_id_seq", allocationSize =1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviews_id_generator")
    @Column(name="id")
    private Integer id;

    @Column(name="username")
    private String username;

    @Column(name="rating")
    private Integer rating;

    @Column(name="comment")
    private String comment;

    @ManyToOne(fetch = FetchType.EAGER,
        cascade = CascadeType.ALL
    )
    @JoinColumn(name="movie_id")
    @JsonIgnoreProperties("reviews")
    private Movie movie;
}
