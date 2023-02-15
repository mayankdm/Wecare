package wecare.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import wecare.user.dto.UserDTO;
import wecare.user.service.UserService;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	UserService service;

	@PostMapping
	public UserDTO addUser(@RequestBody UserDTO dto) {
		return service.addUser(dto);
	}

	@PutMapping("/{id}")
	public UserDTO updateUser(@RequestBody UserDTO dto, @PathVariable long id) {
		return service.updateUser(dto,id);
	}

	@GetMapping("/{id}")
	public UserDTO getUserById(@PathVariable long id) {
		return service.getById(id);
	}

	@GetMapping
	public List<UserDTO> getAllUser() {
		return service.getAllUser();
	}

	@DeleteMapping("/{id}")
	public UserDTO deleteUser(@PathVariable long id) {
		return service.deleteById(id);
	}
}
