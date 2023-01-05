package com.example.scadvisor.service;

import com.example.scadvisor.entity.Match;
import com.example.scadvisor.repository.MatchRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MatchServiceImpl implements MatchService{

    @Autowired
    MatchRepository matchRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Match createMatch(Match match) {
        try {
            if(match != null) {
                Optional<Match> matchToSave = matchRepository.findById(match.getId());
                if (matchToSave.isPresent()){
                } else {
                    Match matchSaved = matchRepository.save(match);
                    return matchSaved;
                }
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede crear el nuevo match");
        }
        return null;
    }
    @Override
    public void deleteMatch(Integer id){
        try {
            matchRepository.deleteById(id);
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede borrar el match con id " + id);
        }
    }

    @Override
    public Match getMatch(Integer id) throws RuntimeException {
        Match matchToReturn = null;
        try {
            Optional<Match> match = matchRepository.findById(id);
            matchToReturn = match.get();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return matchToReturn;
    }

    @Override
    public List<Match> getAll() throws RuntimeException{
        try {
            List<Match> matchList = (List<Match>) matchRepository.findAll();
            return matchList;
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
