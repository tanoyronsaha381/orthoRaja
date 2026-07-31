package com.orthoraja.api.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "orthoraja_blogs")
public class Blog extends BaseEntity {
    private String title;
    private String slug;
    @Column(columnDefinition = "text") private String excerpt;
    @Column(columnDefinition = "text") private String content;
    private String category;
    @Column(columnDefinition = "text") private String tags;
    private String coverImageUrl;
    private Boolean published = true;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    public String getExcerpt() { return excerpt; }
    public void setExcerpt(String excerpt) { this.excerpt = excerpt; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getTags() { return tags; }
    public void setTags(String tags) { this.tags = tags; }
    public String getCoverImageUrl() { return coverImageUrl; }
    public void setCoverImageUrl(String coverImageUrl) { this.coverImageUrl = coverImageUrl; }
    public Boolean getPublished() { return published; }
    public void setPublished(Boolean published) { this.published = published; }
}
