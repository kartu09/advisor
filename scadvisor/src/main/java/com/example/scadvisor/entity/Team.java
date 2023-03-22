package com.example.scadvisor.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "team")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(name = "id", unique = true)
    private Integer id;

    @NotNull
    @Column(name = "name", length = 100, unique = true)
    private String name;

    @NotNull
    @Column(name = "description", length = 500)
    private String description;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    @NotNull
    @Column( name = "creation_date")
    private LocalDate creationDate;
}
