package com.example.scadvisor.controller;

import com.example.scadvisor.entity.Team;
import com.example.scadvisor.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/team")
//@CrossOrigin(origins = "*")
public class TeamController {
    @Autowired
    TeamService teamService;

    @GetMapping("/{id}")
    public Team getTeam(@PathVariable("id") Integer id){
        return teamService.getTeam(id);
    }

    @GetMapping("/all")
    public List<Team> getAll(){
        return teamService.getAll();
    }

    @PostMapping("/new")
    public Team newTeam(@RequestBody Team team){
        return teamService.createTeam(team);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTeam(@PathVariable("id") Integer id){
        teamService.deleteTeam(id);
    }
}
