package com.collectwaste.backendapplication.Controllers;

import com.collectwaste.backendapplication.Models.WasteType;
import com.collectwaste.backendapplication.Services.WasteTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/waste")
@CrossOrigin(origins = "http://localhost:4200")
public class WasteTypeController {

    @Autowired
    private WasteTypeService wasteTypeService;

    @GetMapping("/list")
    public List<WasteType> getAllWasteTypes() {
        return wasteTypeService.listAll();
    }

    @PostMapping("/create")
    public void createWasteType(@RequestBody WasteType wasteType) {
        wasteTypeService.create(wasteType);
    }

    @PostMapping("/update")
    public void updateWasteType(@RequestBody WasteType wasteType) {
        wasteTypeService.update(wasteType);
    }

    @DeleteMapping("/delete")
    public void deleteWasteType(@RequestBody WasteType wasteType) {
        wasteTypeService.delete(wasteType);
    }
}
