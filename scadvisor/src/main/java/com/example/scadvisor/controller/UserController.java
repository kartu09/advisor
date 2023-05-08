package com.example.scadvisor.controller;

import com.example.scadvisor.entity.User;
import com.example.scadvisor.service.UserService;
import com.example.scadvisor.service.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") Integer id){
        logger.info("INSIDE /api/user/id" );
        return userService.getUser(id);
    }

    @GetMapping("/all")
    public List<User> getAll(){
        return userService.getAll();
    }

    @PostMapping(value= "/new", consumes = "application/json")
    public void newUser(@RequestBody User user){
        logger.info("Creating new user:" + user.getName());
        userService.createUser(user);
        logger.info("Created user:" + user.getName());
//        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        userService.deleteUser(id);
    }
}
