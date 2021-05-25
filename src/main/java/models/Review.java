package models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="reviews")
public class Review {

    @Id
    @SequenceGenerator()
    @GeneratedValue()
    @Column
    private Integer id;

    @ManyToOne
    @Column
    @JsonIgnoreProperties("reviews")
    private Username username;

    @Column
    private Integer rating;

    @Column
    private String comment;

    @ManyToOne
    @Column
    @JsonIgnoreProperties("reviews")
    private Movies movie;
}
