package com.example.scadvisor.controller;

import com.example.scadvisor.entity.Role;
import com.example.scadvisor.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/role")
public class RoleController {
    @Autowired
    RoleService roleService;

    @GetMapping("/{id}")
    public Role getRole(@PathVariable("id") Integer id){
        return roleService.getRole(id);
    }

    @GetMapping("/all")
    public List<Role> getAll(){
        return roleService.getAll();
    }

    @PostMapping("/new")
    public Role newRole(@RequestBody String name){
        return roleService.createRole(name);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRole(@PathVariable("id") Integer id){
        roleService.deleteRole(id);
    }
}
