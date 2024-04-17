package com.collectwaste.backendapplication.Security;

import com.collectwaste.backendapplication.Models.User;

public interface SecurityService {
    User validate(User user);

    boolean login(User userValidated, User user);

    User verifyById(int id);
}
