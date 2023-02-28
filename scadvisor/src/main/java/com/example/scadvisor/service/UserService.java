package com.example.scadvisor.service;

import com.example.scadvisor.entity.User;

import java.util.List;

public interface UserService {
    User createUser(User user);

    void deleteUser(Integer id);

    User getUser (Integer id) throws RuntimeException;

    List<User> getAll() throws RuntimeException;

    void save(User user);
}
