package com.example.scadvisor.controller;

import com.example.scadvisor.entity.Player;
import com.example.scadvisor.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/player")
//@CrossOrigin(origins = "*")
public class PlayerController {
    @Autowired
    PlayerService playerService;

    @GetMapping("/{id}")
    public Player getPlayer(@PathVariable("id") Integer id){
        return playerService.getPlayer(id);
    }

    @GetMapping("/all")
    public List<Player> getAll(){
        return playerService.getAll();
    }

    @PostMapping("/new")
    public Player newPlayer(@RequestBody Player player){
        return playerService.createPlayer(player);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePlayer(@PathVariable("id") Integer id){
        playerService.deletePlayer(id);
    }
}
