package com.collectwaste.backendapplication.Models;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "REPORT", schema = "public")
public class Report {

    @Id
    @Column(name = "id")
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id", nullable = false)
    @Getter @Setter
    private int user;

    @Getter @Setter
    @Column(name = "direction", length = 100, nullable = false)
    private String  direccion;

    @Getter @Setter
    @Column(name = "weigth", length = 100, nullable = false)
    private int weigth;

    @Getter @Setter
    @Column(name = "report_day", length = 100, nullable = false)
    private LocalDate reportDay;

    @Getter @Setter
    @Column(name = "report_recollection", length = 100, nullable = false)
    private LocalDate reportRecollection;

    @Getter @Setter
    @Column(name = "observations", length = 100, nullable = false)
    private String observations;

    @Getter @Setter
    @Column(name = "waste_type", nullable = false)
    private int wasteType;
}
