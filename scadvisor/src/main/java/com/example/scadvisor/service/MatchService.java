package com.example.scadvisor.service;

import com.example.scadvisor.entity.Match;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MatchService {
    Match createMatch(Match match);

    void deleteMatch(Integer id);

    Match getMatch(Integer id) throws RuntimeException;

    List<Match> getAll() throws RuntimeException;
}