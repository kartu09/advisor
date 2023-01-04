package com.example.scadvisor.repository;


import com.example.scadvisor.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository("matchRepository")
public interface MatchRepository extends JpaRepository<Match, Serializable> {

}
