package wecare.coach.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import wecare.coach.dto.CoachDTO;
import wecare.coach.entity.Coach;
import wecare.coach.repository.CoachRepository;

@Service
public class CoachService {
	Logger logger = LoggerFactory.getLogger(CoachService.class);

	@Autowired
	CoachRepository repo;

	public CoachDTO addCoach(CoachDTO coachDto) {
		Coach coach = new Coach(coachDto);
		coach = repo.save(coach);
		coachDto.setId(coach.getId());
		return coachDto;
	}

	public CoachDTO updateCoach(CoachDTO dto, Long id) {
		Coach coach = repo.findById(id).get();
		if (coach != null) {
			coach.setName(dto.getName());
			coach.setGender(dto.getGender());
			coach.setId(id);
			coach.setDob(dto.getDob());
			coach.setMobile(dto.getMobile());
			coach.setPassword(dto.getPassword());
			coach.setSpeciality(dto.getSpeciality());
			coach = repo.save(coach);
			dto.setId(coach.getId());
			return dto;
		}
		return null;
	}

	public CoachDTO getById(long id) {
		logger.info("Inside Address Microservice getById " + id);
		Coach coach = repo.findById(id).get();
		if (coach != null) {
			CoachDTO dto = new CoachDTO(coach);
			return dto;
		}
		return null;
	}

	public CoachDTO deleteById(long id) {
		logger.info("Inside Address Microservice getById " + id);
		Coach coach = repo.findById(id).get();
		if (coach != null) {
			repo.delete(coach);
			return new CoachDTO(coach);
		}
		return null;
	}

	public List<CoachDTO> getAllCoach() {
		List<Coach> coaches = repo.findAll();
		List<CoachDTO> coachList = new ArrayList<CoachDTO>();
		for (Coach coach : coaches) {
			CoachDTO dto = new CoachDTO(coach);
			coachList.add(dto);
		}
		return coachList;
	}

}
