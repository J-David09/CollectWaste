package com.collectwaste.backendapplication.Controllers;

import com.collectwaste.backendapplication.Models.User;
import com.collectwaste.backendapplication.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getClientes")
    public List<User> getClientes () {
        return userService.listClients();
    }
}
