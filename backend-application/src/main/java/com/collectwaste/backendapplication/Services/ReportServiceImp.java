package com.collectwaste.backendapplication.Services;

import com.collectwaste.backendapplication.Models.Report;
import com.collectwaste.backendapplication.Models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public class ReportServiceImp implements ReportService{

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public void crete(Report report) {
        entityManager.persist(report);
    }

    @Override
    public List<Report> getByUser(int user) {
        String query = "SELECT r FROM Report r WHERE r.user = " + user + "order by r.reportDay asc";
        return entityManager.createQuery(query, Report.class).getResultList();
    }

}
