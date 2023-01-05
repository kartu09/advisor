package com.example.scadvisor.service;

import com.example.scadvisor.entity.Team;
import com.example.scadvisor.repository.TeamRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamServiceImpl implements TeamService{
    @Autowired
    TeamRepository teamRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Team createTeam(Team team) {
        try {
            if(team != null) {
                Optional<Team> teamToSave = teamRepository.findById(team.getId());
                if (teamToSave.isPresent()){
                } else {
                    Team teamSaved = teamRepository.save(team);
                    return teamSaved;
                }
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede crear el nuevo team");
        }
        return null;
    }
    @Override
    public void deleteTeam(Integer id){
        try {
            teamRepository.deleteById(id);
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede borrar el team con id " + id);
        }
    }

    @Override
    public Team getTeam(Integer id) throws RuntimeException {
        Team teamToReturn = null;
        try {
            Optional<Team> team = teamRepository.findById(id);
            teamToReturn = team.get();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return teamToReturn;
    }

    @Override
    public List<Team> getAll() throws RuntimeException{
        try {
            List<Team> teamList = (List<Team>) teamRepository.findAll();
            return teamList;
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
