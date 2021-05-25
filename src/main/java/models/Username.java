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
@Table(name="users")
public class Username {

    @Id
    @SequenceGenerator()
    @GeneratedValue
    @Column
    private Integer id;

    @Column
    private String username;

    @Column
    private String email;

    @Column
    private String password;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "users", cascade = CascadeType.ALL)
    @Column
    @JsonIgnoreProperties("users")
    private List<Review> reviews = new ArrayList<>();
}
