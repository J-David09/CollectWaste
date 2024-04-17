package com.collectwaste.backendapplication.Services;

import com.collectwaste.backendapplication.Models.Role;
import com.collectwaste.backendapplication.Models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public class UserServiceImp implements UserService{

    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public List<User> listClients() {
        String query = "from User where role = 0";
        return entityManager.createQuery(query).getResultList();
    }
}
