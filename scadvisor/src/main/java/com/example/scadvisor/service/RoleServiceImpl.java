package com.example.scadvisor.service;

import com.example.scadvisor.entity.Role;
import com.example.scadvisor.repository.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService{
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Role createRole(String name) {
        try {
            if(!name.isEmpty()) {
                Role roleToSave = new Role();
                roleToSave.setName(name);
                Role roleSaved = roleRepository.save(roleToSave);
                return roleSaved;
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede crear el nuevo role");
        }
        return null;
    }
    @Override
    public void deleteRole(Integer id){
        try {
            roleRepository.deleteById(id);
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e + "No se puede borrar el role con id " + id);
        }
    }

    @Override
    public Role getRole(Integer id) throws RuntimeException {
        Role roleToReturn = null;
        try {
            Optional<Role> role = roleRepository.findById(id);
            roleToReturn = role.get();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return roleToReturn;
    }

    @Override
    public List<Role> getAll() throws RuntimeException{
        try {
            List<Role> roleList = (List<Role>) roleRepository.findAll();
            return roleList;
        }
        catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
