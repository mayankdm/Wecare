package wecare.coach.service;

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
	
	public CoachDTO getById (long id) {
		
		logger.info("Inside Address Microservice getById " + id);
		
		Coach coach = repo.findById(id).get();
		CoachDTO dto = new CoachDTO(coach);
		return dto;
	}
	
}
