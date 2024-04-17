package com.collectwaste.backendapplication.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "WASTE_TYPE", schema = "public")
public class WasteType {
    @Id
    @Column(name = "id")
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Getter @Setter
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Getter @Setter
    @Column(name = "description", length = 100, nullable = false)
    private String description;
}
