package wecare.coach.dto;

import java.util.Date;

import wecare.coach.entity.Coach;

public class CoachDTO {
	private Long id;
	private String name;
	private String password;
	private Date dob;
	private Boolean gender;
	private String mobile;
	private String speciality;

	public CoachDTO(Coach coach) {
		super();
		this.id = coach.getId();
		this.name = coach.getName();
		this.password = coach.getPassword();
		this.dob = coach.getDob();
		this.gender = coach.getGender();
		this.mobile = coach.getMobile();
		this.speciality = coach.getSpeciality();
	}

	public CoachDTO(Long id, String name, String password, Date dob, Boolean gender, String mobile, String speciality) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.dob = dob;
		this.gender = gender;
		this.mobile = mobile;
		this.speciality = speciality;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Boolean getGender() {
		return gender;
	}

	public void setGender(Boolean gender) {
		this.gender = gender;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
}
