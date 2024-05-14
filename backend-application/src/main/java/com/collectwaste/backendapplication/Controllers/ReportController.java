package com.collectwaste.backendapplication.Controllers;

import com.collectwaste.backendapplication.Models.Report;
import com.collectwaste.backendapplication.Services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/report")
@CrossOrigin(origins = "http://localhost:4200")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping("/create")
    public void createReport(@RequestBody Report report) {
        reportService.crete(report);
    }

    @GetMapping("/getByUser/{user}")
    public List<Report> getReportByUser(@PathVariable String user) {
        int userInt = Integer.parseInt(user);
        return reportService.getByUser(userInt);
    }
}
