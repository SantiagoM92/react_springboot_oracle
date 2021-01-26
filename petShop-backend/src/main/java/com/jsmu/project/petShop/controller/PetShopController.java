package com.jsmu.project.petShop.controller;


import com.jsmu.project.petShop.model.Pet;
import com.jsmu.project.petShop.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PetShopController {

    PetService petService;

    @PostMapping("/pet")
    void savePet(@RequestBody Pet pet) {
        petService.savePet(pet);
    }

    @GetMapping("/pet/{id}")
    Pet getPetById(@PathVariable Integer id) {
        return petService.getPetById(id);
    }

    @GetMapping("/pets")
    List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @DeleteMapping("/pet/{id}")
    void deletePet(@PathVariable Integer id) {
        petService.deletePet(id);
    }

    @PutMapping("/pet")
    void updatePet(@RequestBody Pet pet) {
        petService.updatePet(pet);
    }

    @Autowired
    public void setPetService(PetService petService) {
        this.petService = petService;
    }
}
