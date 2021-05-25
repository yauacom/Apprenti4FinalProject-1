package models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="movies")
public class Movies {

    @Id
    @SequenceGenerator()
    @GeneratedValue()
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private String genre;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "movies", cascade = CascadeType.ALL)
    @Column
    @JsonIgnoreProperties("movies")
    private List<Review> reviews = new ArrayList<>();

    @Column
    private String description;
}
