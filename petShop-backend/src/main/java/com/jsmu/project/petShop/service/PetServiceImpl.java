package com.jsmu.project.petShop.service;

import com.jsmu.project.petShop.model.Pet;
import com.jsmu.project.petShop.repository.PetDAO;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceImpl implements PetService, ApplicationContextAware {

    PetDAO petDAO;

    @Override
    public Pet savePet(Pet pet) {
        return petDAO.save(pet);
    }

    @Override
    public void deletePet(Integer id) {
        petDAO.findById(id).ifPresent(petDAO::delete);
    }


    @Override
    public void updatePet(Pet pet) {
        petDAO.findById(pet.getId()).ifPresent(petDAO::save);
    }

    @Override
    public Pet getPetById(Integer number) {
        return petDAO.findById(number).orElse(null);
    }

    @Override
    public List<Pet> getAllPets() {
        return petDAO.findAll();
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {

        petDAO = applicationContext.getBean(PetDAO.class);

    }
}
