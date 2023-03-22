package com.example.scadvisor.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "advice")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Advice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, length = 11)
    private Integer id;

    @NotNull
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Enumerated
    private AdviceType adviceType;

    @Enumerated
    private Lineup lineup;

    @OneToOne
    private Player changeIn;

    @OneToOne
    private Player changeOut;

    @Enumerated
    private Tactic tactic;

    @ManyToOne
    private Match match;

    @Column(name = "creation_date")
    private LocalDateTime creationDate;

}
