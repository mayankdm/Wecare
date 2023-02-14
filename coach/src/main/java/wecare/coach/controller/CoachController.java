package wecare.coach.controller;

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

import wecare.coach.dto.CoachDTO;
import wecare.coach.service.CoachService;

@RestController
@RequestMapping("/coaches")
@CrossOrigin
public class CoachController {

	@Autowired
	CoachService service;

	@PostMapping
	public CoachDTO addCoach(@RequestBody CoachDTO dto) {
		return service.addCoach(dto);
	}

	@PutMapping("/{id}")
	public CoachDTO updateCoach(@RequestBody CoachDTO dto, @PathVariable long id) {
		return service.updateCoach(dto,id);
	}

	@GetMapping("/{id}")
	public CoachDTO getCoachById(@PathVariable long id) {
		return service.getById(id);
	}

	@GetMapping
	public List<CoachDTO> getAllCoach() {
		return service.getAllCoach();
	}

	@DeleteMapping("/{id}")
	public CoachDTO deleteCoach(@PathVariable long id) {
		return service.deleteById(id);
	}
}
