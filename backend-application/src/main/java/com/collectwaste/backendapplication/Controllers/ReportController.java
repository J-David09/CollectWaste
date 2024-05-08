package com.collectwaste.backendapplication.Controllers;

import com.collectwaste.backendapplication.Models.Report;
import com.collectwaste.backendapplication.Services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/report")
@CrossOrigin(origins = "http://localhost:4200")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping("/create")
    public void createWasteType(@RequestBody Report report) {
        reportService.crete(report);
    }
}
