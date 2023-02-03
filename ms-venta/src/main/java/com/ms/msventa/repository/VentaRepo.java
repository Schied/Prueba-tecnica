package com.ms.msventa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.msventa.entity.Venta;

public interface VentaRepo extends JpaRepository<Venta, Integer>{

}
