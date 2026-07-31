package com.orthoraja.api.repository;

import com.orthoraja.api.domain.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
    List<Testimonial> findByPublishedTrueOrderByCreatedAtDesc();
}
