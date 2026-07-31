package com.orthoraja.api.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "orthoraja_gallery")
public class GalleryItem extends BaseEntity {
    private String title;
    private String category;
    private String imageUrl;
    private String altText;
    private Boolean published = true;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public String getAltText() { return altText; }
    public void setAltText(String altText) { this.altText = altText; }
    public Boolean getPublished() { return published; }
    public void setPublished(Boolean published) { this.published = published; }
}
