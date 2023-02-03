package com.ms.msmedicamento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.ms.msmedicamento.entity.Medicamento;

public interface MedicamentoRepo extends JpaRepository<Medicamento, Integer>{

}
