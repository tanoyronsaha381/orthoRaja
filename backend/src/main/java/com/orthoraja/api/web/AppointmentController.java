package com.orthoraja.api.web;

import com.orthoraja.api.domain.Appointment;
import com.orthoraja.api.repository.AppointmentRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    private final AppointmentRepository repository;
    public AppointmentController(AppointmentRepository repository) { this.repository = repository; }
    @PostMapping public Appointment create(@Valid @RequestBody Appointment appointment) { return repository.save(appointment); }
    @GetMapping public List<Appointment> all() { return repository.findAll(); }
    @PutMapping("/{id}") public Appointment update(@PathVariable Long id, @RequestBody Appointment input) {
        input.setStatus(input.getStatus() == null ? "PENDING" : input.getStatus());
        return repository.findById(id).map(existing -> {
            existing.setStatus(input.getStatus());
            existing.setMessage(input.getMessage());
            return repository.save(existing);
        }).orElseThrow();
    }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { repository.deleteById(id); }
}
