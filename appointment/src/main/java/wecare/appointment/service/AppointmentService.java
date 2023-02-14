package wecare.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import wecare.appointment.dto.AppointmentDto;
import wecare.appointment.entity.Appointment;
import wecare.appointment.repository.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired
	AppointmentRepository repo;

	public Appointment addAppointment(AppointmentDto dto) {
		Appointment appointment = new Appointment(dto);
		return repo.save(appointment);
	}

	public Appointment updateAppointment(int id, AppointmentDto dto) {
		Appointment appointment = new Appointment(dto);
		appointment.setId(id);
		return repo.save(appointment);
	}

	public Appointment cancelAppointment(int id) {
		Appointment appointment = repo.findById(id).get();
		if(appointment != null) {
			repo.deleteById(id);
		}
		return appointment;
	}

	public List<Appointment> getAllAppointments() {
		return repo.findAll();
	}

	public Appointment viewAppointmentById(int id) {
		return repo.findById(id).get();
	}

}
