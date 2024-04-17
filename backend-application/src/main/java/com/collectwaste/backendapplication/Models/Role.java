package com.collectwaste.backendapplication.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ROLE", schema = "public")
public class Role {
    @Id
    @Column(name = "id")
    @Getter
    @Setter
    private int id;

    @Getter @Setter
    @Column(name = "name", length = 100, nullable = false)
    private String name;
}
