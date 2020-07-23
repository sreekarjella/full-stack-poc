package com.mindtree.mindtreebankserver.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ResidentialStatus {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String residentialStatus;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getResidentialStatus() {
		return residentialStatus;
	}

	public void setResidentialStatus(String residentialStatus) {
		this.residentialStatus = residentialStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((residentialStatus == null) ? 0 : residentialStatus.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ResidentialStatus other = (ResidentialStatus) obj;
		if (id != other.id)
			return false;
		if (residentialStatus == null) {
			if (other.residentialStatus != null)
				return false;
		} else if (!residentialStatus.equals(other.residentialStatus))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ResidentialStatus [id=" + id + ", residentialStatus=" + residentialStatus + "]";
	}

}
