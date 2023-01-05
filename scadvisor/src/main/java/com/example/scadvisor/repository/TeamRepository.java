package com.example.scadvisor.repository;

import com.example.scadvisor.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository("teamRepository")
public interface TeamRepository extends CrudRepository<Team, Integer> {

}
