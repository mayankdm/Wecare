package wecare.appointment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import wecare.appointment.dto.AppointmentDto;
import wecare.appointment.entity.Appointment;
import wecare.appointment.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
	
	@Autowired
	AppointmentService service;
	
	@PostMapping
	public Appointment bookAppointment(@RequestBody AppointmentDto appointmentDto) {
		return service.addAppointment(appointmentDto);
	}
	
	@GetMapping
	public List<Appointment> viewAppointment() {
		return service.getAllAppointments();
	}
	@GetMapping("/{id}")
	public Appointment viewAppointmentById(@PathVariable int id) {
		return service.viewAppointmentById(id);
	}
	
	@PutMapping("/{id}")
	public Appointment rescheduleAppointment(@PathVariable int id, @RequestBody AppointmentDto dto) {
		return service.updateAppointment(id, dto);
	}
	
	@DeleteMapping("/{id}")
	public Appointment cancelAppointment(@PathVariable int id) {
		return service.cancelAppointment(id);
	}
}
