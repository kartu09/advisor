package com.example.scadvisor.service;

import com.example.scadvisor.entity.Player;
import com.example.scadvisor.repository.PlayerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerServiceImpl implements PlayerService{
    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Player createPlayer(Player player) {
        try {
            if(player != null) {
                Optional<Player> playerToSave = playerRepository.findById(player.getId());
                if (playerToSave.isPresent()){
                } else {
                    Player playerSaved = playerRepository.save(player);
                    return playerSaved;
                }
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede crear el nuevo Player");
        }
        return null;
    }
    @Override
    public void deletePlayer(Integer id){
        try {
            playerRepository.deleteById(id);
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede borrar el Player con id " + id);
        }
    }

    @Override
    public Player getPlayer(Integer id) throws RuntimeException {
        Player playerToReturn = null;
        try {
            Optional<Player> Player = playerRepository.findById(id);
            playerToReturn = Player.get();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return playerToReturn;
    }

    @Override
    public List<Player> getAll() throws RuntimeException{
        try {
            List<Player> playerList = (List<Player>) playerRepository.findAll();
            return playerList;
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
