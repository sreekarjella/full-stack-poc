package com.mindtree.mindtreebankserver.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RegistrationStatus {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String registrationStatus;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRegistrationStatus() {
		return registrationStatus;
	}

	public void setRegistrationStatus(String registrationStatus) {
		this.registrationStatus = registrationStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((registrationStatus == null) ? 0 : registrationStatus.hashCode());
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
		RegistrationStatus other = (RegistrationStatus) obj;
		if (id != other.id)
			return false;
		if (registrationStatus == null) {
			if (other.registrationStatus != null)
				return false;
		} else if (!registrationStatus.equals(other.registrationStatus))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "RegistrationStatus [id=" + id + ", registrationStatus=" + registrationStatus + "]";
	}

}
