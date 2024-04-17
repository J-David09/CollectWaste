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

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @Getter @Setter
    private User user;

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

    @ManyToOne
    @Getter @Setter
    @JoinColumn(name = "waste_type", nullable = false)
    private WasteType wasteType;
}
