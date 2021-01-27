package com.jsmu.project.petShop.service;

import com.jsmu.project.petShop.model.Pet;

import java.util.List;

public interface PetService {

    Pet savePet(Pet pet);

    void deletePet(Integer number);

    void updatePet(Pet pet);

    Pet getPetById(Integer number);

    List<Pet> getAllPets();

}
