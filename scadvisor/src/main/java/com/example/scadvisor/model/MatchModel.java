package com.example.scadvisor.model;

import com.example.scadvisor.entity.Team;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class MatchModel {
    private Integer id;
    private String name;
    private String description;
    private LocalDate creationDate;
    private LocalDateTime matchDate;
    private Team local;
    private Team visitante;
    private Integer marcadorLocal;
    private Integer marcadorVisitante;

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

    public Team getLocal() {
        return local;
    }

    public void setLocal(Team local) {
        this.local = local;
    }

    public Team getVisitante() {
        return visitante;
    }

    public void setVisitante(Team visitante) {
        this.visitante = visitante;
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

    @Override
    public String toString() {
        return "MatchModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", creationDate=" + creationDate +
                ", matchDate=" + matchDate +
                ", local=" + local +
                ", visitante=" + visitante +
                ", marcadorLocal=" + marcadorLocal +
                ", marcadorVisitante=" + marcadorVisitante +
                '}';
    }
}
