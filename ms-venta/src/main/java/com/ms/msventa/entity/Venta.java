package com.ms.msventa.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "venta")
public class Venta {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private Long id;
    private Date fecha;
    private String hora;
    private String medicamento;
    private Long cantidad;
    private Long valor_unitario;
    private Long valor_total;
    
	public Venta() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public String getMedicamento() {
		return medicamento;
	}

	public void setMedicamento(String medicamento) {
		this.medicamento = medicamento;
	}

	public Long getCantidad() {
		return cantidad;
	}

	public void setCantidad(Long cantidad) {
		this.cantidad = cantidad;
	}

	public Long getValor_unitario() {
		return valor_unitario;
	}

	public void setValor_unitario(Long valor_unitario) {
		this.valor_unitario = valor_unitario;
	}

	public Long getValor_total() {
		return valor_total;
	}

	public void setValor_total(Long valor_total) {
		this.valor_total = valor_total;
	} 

}
