package com.jsmu.project.petShop.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "temp_pet")

public class Pet {


    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "temp_pet_sequence", allocationSize = 1)
    private Integer id;

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private String color;

    @Column
    private LocalDate register;

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", color='" + color + '\'' +
                ", register=" + register +
                '}';
    }
}
