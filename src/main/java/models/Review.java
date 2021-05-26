package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="reviews")
public class Review {

    @Id
    @SequenceGenerator(name ="reviews_id_generator", sequenceName = "reviews_id_seq", allocationSize =1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviews_id_seq")
    @Column
    private Integer id;

    @Column
    private String username;

    @Column
    private Integer rating;

    @Column
    private String comment;

    @ManyToOne
    @JoinColumn(name="movie_id")
    @JsonIgnoreProperties("reviews")
    private Movies movie;
}
