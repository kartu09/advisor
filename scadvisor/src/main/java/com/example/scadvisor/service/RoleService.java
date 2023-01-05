package com.example.scadvisor.service;

import com.example.scadvisor.entity.Role;

import java.util.List;

public interface RoleService {
    Role createRole(String name);

    void deleteRole(Integer id);

    Role getRole(Integer id) throws RuntimeException;

    List<Role> getAll() throws RuntimeException;
}
