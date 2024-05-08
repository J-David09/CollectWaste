package com.collectwaste.backendapplication.Services;

import com.collectwaste.backendapplication.Models.Report;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public class ReporServiceImp implements ReportService{

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public void crete(Report report) {
        entityManager.persist(report);
    }
}
