package com.ms.msmedicamento.service.medicamentoServiceIMPL;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ms.msmedicamento.entity.Medicamento;
import com.ms.msmedicamento.repository.MedicamentoRepo;
import com.ms.msmedicamento.service.MedicamentoService;


@Service
public class MSIMPL implements MedicamentoService{
	
	@Autowired
	private MedicamentoRepo repo;
	
	@Override
	public List<Medicamento> consultarMedicamento(){
		return (List<Medicamento>) this.repo.findAll();
	}
	
	@Override
	public Medicamento CrearMedicamento(Medicamento med) {
		med.setNombre(med.getNombre());
		return this.repo.save(med);
	}

	@Override
	public Medicamento ModificarMedicamento(Medicamento med) {
		// TODO Auto-generated method stub
		return this.repo.save(med);
	}

	@Override
	public Medicamento BuscarMedicamento(int id) {
		// TODO Auto-generated method stub
		return this.repo.findById(id).get();
	}

	@Override
	public void EliminarMedicamento(int id) {
		// TODO Auto-generated method stub
		this.repo.deleteById(id);
	}

	
}
