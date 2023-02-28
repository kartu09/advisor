package com.example.scadvisor.repository;

import com.example.scadvisor.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository("playerRepository")
public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
