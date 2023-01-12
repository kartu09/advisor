package com.example.scadvisor.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

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

    @OneToMany(mappedBy = "team")
    private List<Player> players;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
}
