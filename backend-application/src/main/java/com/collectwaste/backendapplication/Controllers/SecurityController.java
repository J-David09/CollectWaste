package com.collectwaste.backendapplication.Controllers;

import com.collectwaste.backendapplication.Models.User;
import com.collectwaste.backendapplication.Security.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/security")
@CrossOrigin(origins = "http://localhost:4200/")
public class SecurityController {

    @Autowired
    private SecurityService securityService;

    @PostMapping("/login")
    public User login (@RequestBody User user) {
        //si el usuario existe devuelve el usuario completo
        User userValidated = securityService.validate(user);

        if(userValidated != null) {
            //si se valida que el usuario tiene la contraseña correcta devuelve el usuario
            if(securityService.login(userValidated, user)) {
                return userValidated;
            }
        }
        return null;
    }

    @GetMapping("/verify/{id}")
    public User verifyById (@PathVariable int id) {
        return securityService.verifyById(id);
    }
}
