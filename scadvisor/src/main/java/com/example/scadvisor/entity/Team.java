package com.example.scadvisor.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "team")
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

    @NotNull
    @Column( name = "creation_date")
    private LocalDate creationDate;

    public Team(@NotNull Integer id, @NotNull String name, @NotNull String description, @NotNull LocalDate creationDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
    }

    public Team() {
    }
}
