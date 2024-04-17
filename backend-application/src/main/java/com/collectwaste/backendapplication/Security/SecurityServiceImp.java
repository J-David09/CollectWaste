package com.collectwaste.backendapplication.Security;

import com.collectwaste.backendapplication.Models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Transactional
@Repository
public class SecurityServiceImp implements SecurityService{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User validate(User user) {
        String query = "from User where userName = '" + user.getUserName() + "'";
        List<User> users = entityManager.createQuery(query).getResultList();
        if (users.size() == 0){
            return null;
        }
        return users.get(0);
    }

    @Override
    public boolean login(User userValidated, User user) {
        if (Objects.equals(userValidated.getPassword(), user.getPassword())) {
            return true;
        }
        return false;
    }

    @Override
    public User verifyById(int id) {
        return entityManager.find(User.class, id);
    }
}
