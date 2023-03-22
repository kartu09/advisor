package com.example.scadvisor.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "player")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false, length = 11)
    private Integer id;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "dorsal", nullable = false)
    private Integer dorsal;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;
}
