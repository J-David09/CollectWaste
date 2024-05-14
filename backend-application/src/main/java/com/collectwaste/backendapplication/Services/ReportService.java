package com.collectwaste.backendapplication.Services;

import com.collectwaste.backendapplication.Models.Report;
import com.collectwaste.backendapplication.Models.User;

import java.util.List;

public interface ReportService {
    void crete(Report report);

    List<Report> getByUser(int user);

    List<Report> listAll();

    void update(Report report);
}
