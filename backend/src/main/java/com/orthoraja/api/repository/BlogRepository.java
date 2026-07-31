package com.orthoraja.api.repository;

import com.orthoraja.api.domain.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByPublishedTrueOrderByCreatedAtDesc();
    Optional<Blog> findBySlugAndPublishedTrue(String slug);
}
