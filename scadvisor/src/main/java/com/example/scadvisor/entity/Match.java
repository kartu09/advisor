package com.example.scadvisor.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "match")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "name", length = 100, unique = true, nullable = false)
    private String name;

    @Column(name = "description", nullable = false, length = 500)
    private String description;

    @Column( name = "creation_date", nullable = false)
    private LocalDate creationDate;

    @Column(name = "matchDate", nullable = false)
    private LocalDateTime matchDate;

    @Column(name = "local", nullable = false, length = 500)
    private Team local;

    @Column(name = "visitante", nullable = false, length = 500)
    private Team visitante;

    @Column(name = "marcadorLocal", nullable = false)
    private Integer marcadorLocal;

    @Column(name = "marcadorVisitante", nullable = false)
    private Integer marcadorVisitante;
}
