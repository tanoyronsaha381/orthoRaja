package com.orthoraja.api.repository;

import com.orthoraja.api.domain.GalleryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface GalleryRepository extends JpaRepository<GalleryItem, Long> {
    List<GalleryItem> findByPublishedTrueOrderByCreatedAtDesc();
}
