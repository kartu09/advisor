package com.example.scadvisor.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "matchs")
@AllArgsConstructor
@NoArgsConstructor
@Data
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

    @ManyToOne
    @JoinColumn(name = "local_team_id")
    private Team local;

    @ManyToOne
    @JoinColumn(name = "visitante_team_id")
    private Team visitante;

    @NotNull
    @Column(name = "marcadorLocal")
    private Integer marcadorLocal;

    @NotNull
    @Column(name = "marcadorVisitante")
    private Integer marcadorVisitante;
}
