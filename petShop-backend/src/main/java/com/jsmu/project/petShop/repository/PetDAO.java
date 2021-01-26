package com.jsmu.project.petShop.repository;

import com.jsmu.project.petShop.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetDAO extends JpaRepository<Pet, Integer> {

}
