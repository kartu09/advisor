package com.example.scadvisor.service;

import com.example.scadvisor.entity.Player;

import java.util.List;

public interface PlayerService {
    Player createPlayer(Player player);

    void deletePlayer(Integer id);

    Player getPlayer(Integer id) throws RuntimeException;

    List<Player> getAll() throws RuntimeException;
}
