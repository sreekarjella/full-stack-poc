package com.mindtree.mindtreebankserver.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Income {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String incomeRange;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getIncomeRange() {
		return incomeRange;
	}

	public void setIncomeRange(String incomeRange) {
		this.incomeRange = incomeRange;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((incomeRange == null) ? 0 : incomeRange.hashCode());
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
		Income other = (Income) obj;
		if (id != other.id)
			return false;
		if (incomeRange == null) {
			if (other.incomeRange != null)
				return false;
		} else if (!incomeRange.equals(other.incomeRange))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Income [id=" + id + ", incomeRange=" + incomeRange + "]";
	}

}
