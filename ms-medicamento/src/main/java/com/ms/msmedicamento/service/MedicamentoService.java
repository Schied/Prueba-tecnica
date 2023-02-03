package com.ms.msmedicamento.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ms.msmedicamento.entity.Medicamento;

public interface MedicamentoService {
	
	public List<Medicamento> consultarMedicamento();
		
	public Medicamento CrearMedicamento(Medicamento med);
	
	public Medicamento ModificarMedicamento(Medicamento med);
	
	public Medicamento BuscarMedicamento(int id);
	
	public void EliminarMedicamento(int id);
	
}
