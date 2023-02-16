package com.example.scadvisor.repository;

import com.example.scadvisor.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository("userRepository")
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByEmail(String email);
}
