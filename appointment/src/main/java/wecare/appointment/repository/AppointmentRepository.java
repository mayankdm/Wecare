package wecare.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import wecare.appointment.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{

}
