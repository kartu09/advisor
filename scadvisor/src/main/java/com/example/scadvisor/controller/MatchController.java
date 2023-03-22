package com.example.scadvisor.controller;

import com.example.scadvisor.entity.Match;
import com.example.scadvisor.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/match")
//@CrossOrigin(origins = "*")
public class MatchController {
    @Autowired
    MatchService matchService;

    @GetMapping("/{id}")
    public Match getMatch(@PathVariable("id") Integer id){
        return matchService.getMatch(id);
    }

    @GetMapping("/all")
    public List<Match> getAll(){
        return matchService.getAll();
    }

    @PostMapping("/new")
    public Match newRack(@RequestBody Match match){
        return matchService.createMatch(match);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRack(@PathVariable("id") Integer id){
        matchService.deleteMatch(id);
    }
}
