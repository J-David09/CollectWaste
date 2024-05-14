package com.collectwaste.backendapplication.Services;

import com.collectwaste.backendapplication.Models.WasteType;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;
import jakarta.persistence.PersistenceContext;

import java.util.List;

@Transactional
@Repository
public class WasteTypeServiceImp implements WasteTypeService{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<WasteType> listAll() {
        String query = "from WasteType order by id asc";
        return entityManager.createQuery(query, WasteType.class).getResultList();
    }

    @Override
    public void create(WasteType wasteType) {
        entityManager.persist(wasteType);
    }

    @Override
    public void update(WasteType wasteType) {
        entityManager.merge(wasteType);
    }

    @Override
    public void delete(WasteType wasteType) {
        entityManager.remove(entityManager.merge(wasteType));
    }

    @Override
    public WasteType getById(int id) {
        String query = "from WasteType where id = " + id;
        return (WasteType)entityManager.createQuery(query, WasteType.class).getSingleResult();
    }

}
