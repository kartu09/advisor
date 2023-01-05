package com.example.scadvisor.repository;

import com.example.scadvisor.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository("roleRepository")
public interface RoleRepository extends CrudRepository<Role, Integer> {

}
