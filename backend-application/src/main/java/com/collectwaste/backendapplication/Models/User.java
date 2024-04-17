package com.collectwaste.backendapplication.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "USER", schema = "public")
public class User {
    @Id
    @Column(name = "id")
    @Getter
    @Setter
    private int id;

    @Getter @Setter
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Getter @Setter
    @Column(name = "user_name", length = 100, nullable = false, unique = true)
    private String userName;

    @Getter @Setter
    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "role", nullable = false)
    @Getter @Setter
    private Role role;
}
