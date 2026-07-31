package com.orthoraja.api.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "orthoraja_testimonials")
public class Testimonial extends BaseEntity {
    private String patientName;
    @Column(columnDefinition = "text") private String quote;
    private Integer rating = 5;
    private String photoUrl;
    private Boolean published = true;
    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }
    public String getQuote() { return quote; }
    public void setQuote(String quote) { this.quote = quote; }
    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }
    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }
    public Boolean getPublished() { return published; }
    public void setPublished(Boolean published) { this.published = published; }
}
