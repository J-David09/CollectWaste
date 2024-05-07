package com.collectwaste.backendapplication.Services;

import com.collectwaste.backendapplication.Models.WasteType;

import java.util.List;

public interface WasteTypeService {
    List<WasteType> listAll ();

    void create (WasteType wasteType);

    void update (WasteType wasteType);

    void delete (WasteType wasteType);
}
