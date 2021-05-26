package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
public class Movies {

    @Id
    @SequenceGenerator(name = "movies_id_generator", sequenceName = "movies_id_seq", allocationSize =1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movies_id_generator")
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private String genre;

    @Column
    private String imgUrl;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "movie", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("movie")
    private List<Review> reviews;

    @Column
    private String description;
}
