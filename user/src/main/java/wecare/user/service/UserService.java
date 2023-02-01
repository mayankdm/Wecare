package wecare.user.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import wecare.user.dto.UserDTO;
import wecare.user.entity.User;
import wecare.user.repository.UserRepository;

@Service
public class UserService {
	Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	UserRepository repo;

	public UserDTO addUser(UserDTO userDto) {
		User user = new User(userDto);
		user = repo.save(user);
		userDto.setId(user.getId());
		return userDto;
	}

	public UserDTO updateUser(UserDTO dto, Long id) {
		User user = repo.findById(id).get();
		if (user != null) {
			user.setName(dto.getName());
			user.setGender(dto.getGender());
			user.setId(id);
			user.setDob(dto.getDob());
			user.setMobile(dto.getMobile());
			user.setPassword(dto.getPassword());
			user.setEmail(dto.getEmail());
			user.setCity(dto.getCity());
			user.setState(dto.getState());
			user.setCountry(dto.getCountry());
			user.setPinCode(user.getPinCode());
			user = repo.save(user);
			dto.setId(user.getId());
			return dto;
		}
		return null;
	}

	public UserDTO getById(long id) {
		logger.info("Inside Address Microservice getById " + id);
		User user = repo.findById(id).get();
		if (user != null) {
			UserDTO dto = new UserDTO(user);
			return dto;
		}
		return null;
	}

	public UserDTO deleteById(long id) {
		logger.info("Inside Address Microservice getById " + id);
		User user = repo.findById(id).get();
		if (user != null) {
			repo.delete(user);
			return new UserDTO(user);
		}
		return null;
	}

	public List<UserDTO> getAllUser() {
		List<User> useres = repo.findAll();
		List<UserDTO> userList = new ArrayList<UserDTO>();
		for (User user : useres) {
			UserDTO dto = new UserDTO(user);
			userList.add(dto);
		}
		return userList;
	}
}
