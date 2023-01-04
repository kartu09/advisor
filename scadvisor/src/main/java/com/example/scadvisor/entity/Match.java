package com.example.scadvisor.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "matchs")
public class Match {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @Column(name = "name", length = 100)
    private String name;

    @NotNull
    @Column(name = "description", length = 500)
    private String description;

    @NotNull
    @Column( name = "creation_date")
    private LocalDate creationDate;

    @NotNull
    @Column(name = "matchDate", nullable = false)
    private LocalDateTime matchDate;

    @NotNull
    @Column(name = "local", length = 500)
    private String local;

    @NotNull
    @Column(name = "visitante", length = 500)
    private String visitante;

    @NotNull
    @Column(name = "marcadorLocal")
    private Integer marcadorLocal;

    @NotNull
    @Column(name = "marcadorVisitante")
    private Integer marcadorVisitante;

    public Match() {
    }

    public Match(@NotNull Integer id, @NotNull String name, @NotNull String description, @NotNull LocalDate creationDate, @NotNull LocalDateTime matchDate, @NotNull String local, @NotNull String visitante, @NotNull Integer marcadorLocal, @NotNull Integer marcadorVisitante) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.matchDate = matchDate;
        this.local = local;
        this.visitante = visitante;
        this.marcadorLocal = marcadorLocal;
        this.marcadorVisitante = marcadorVisitante;
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

    public LocalDateTime getMatchDate() {
        return matchDate;
    }

    public void setMatchDate(LocalDateTime matchDate) {
        this.matchDate = matchDate;
    }

    public Integer getMarcadorLocal() {
        return marcadorLocal;
    }

    public void setMarcadorLocal(Integer marcadorLocal) {
        this.marcadorLocal = marcadorLocal;
    }

    public Integer getMarcadorVisitante() {
        return marcadorVisitante;
    }

    public void setMarcadorVisitante(Integer marcadorVisitante) {
        this.marcadorVisitante = marcadorVisitante;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getVisitante() {
        return visitante;
    }

    public void setVisitante(String visitante) {
        this.visitante = visitante;
    }
}
