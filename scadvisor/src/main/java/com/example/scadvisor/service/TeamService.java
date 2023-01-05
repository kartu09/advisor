package com.example.scadvisor.service;

import com.example.scadvisor.entity.Team;

import java.util.List;

public interface TeamService {
    Team createTeam(Team team);

    void deleteTeam(Integer id);

    Team getTeam (Integer id) throws RuntimeException;

    List<Team> getAll() throws RuntimeException;
}
