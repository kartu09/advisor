package com.example.scadvisor.service;

import com.example.scadvisor.entity.User;
import com.example.scadvisor.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public User createUser(User user) {
        try {
            if(user != null) {
                Optional<User> userToSave = userRepository.findById(user.getId());
                if (userToSave.isPresent()){
                } else {
                    User userSaved = userRepository.save(user);
                    return userSaved;
                }
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede crear el nuevo user");
        }
        return null;
    }
    @Override
    public void deleteUser(Integer id){
        try {
            userRepository.deleteById(id);
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede borrar el user con id " + id);
        }
    }

    @Override
    public User getUser(Integer id) throws RuntimeException {
        User userToReturn = null;
        try {
            Optional<User> user = userRepository.findById(id);
            userToReturn = user.get();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return userToReturn;
    }

    @Override
    public List<User> getAll() throws RuntimeException{
        try {
            List<User> userList = (List<User>) userRepository.findAll();
            return userList;
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

}
