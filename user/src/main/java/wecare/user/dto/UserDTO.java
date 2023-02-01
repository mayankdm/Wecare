package wecare.user.dto;

import java.util.Date;

import wecare.user.entity.User;

public class UserDTO {
	private Long id;
	private String name;
	private String password;
	private String mobile;
	private String email;
	private String city;
	private String state;
	private String country;
	private Date dob;
	private Boolean gender;
	private Long pinCode;

	public UserDTO(User user) {
		super();
		id = user.getId();
		name = user.getName();
		password = user.getPassword();
		dob = user.getDob();
		gender = user.getGender();
		mobile = user.getMobile();
		city = user.getCity();
		email = user.getEmail();
		state = user.getState();
		country = user.getCountry();
		pinCode = user.getPinCode();
	}

	public UserDTO(Long id,String name, String password, String mobile, String email, String city, String state,
			String country, Date dob, Boolean gender, Long pinCode) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.mobile = mobile;
		this.email = email;
		this.city = city;
		this.state = state;
		this.country = country;
		this.dob = dob;
		this.gender = gender;
		this.pinCode = pinCode;
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

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
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

	public Long getPinCode() {
		return pinCode;
	}

	public void setPinCode(Long pinCode) {
		this.pinCode = pinCode;
	}
}
