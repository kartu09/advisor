package com.example.scadvisor.controller;


import com.example.scadvisor.entity.User;
import com.example.scadvisor.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
@CrossOrigin(origins = "*")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);


    @Autowired
    private UserRepository userRepository;

    @GetMapping("/login")
    public String showLoginForm() {
        logger.info("INSIDE /login1" );
        return "login";
    }

    @PostMapping("/login")
    public String processLoginForm(@RequestParam String username, @RequestParam String password, HttpSession session) {
        logger.info("INSIDE /login2" );

        User user = userRepository.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            session.setAttribute("user", user);
            logger.info("user añadido a la sesión " );
            return "redirect:/home";
        } else {
            return "redirect:/login?error";
        }
    }

}

