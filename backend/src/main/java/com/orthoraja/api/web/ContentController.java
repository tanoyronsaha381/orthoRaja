package com.orthoraja.api.web;

import com.orthoraja.api.domain.*;
import com.orthoraja.api.repository.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ContentController {
    private final TestimonialRepository testimonials;
    private final BlogRepository blogs;
    private final GalleryRepository gallery;
    private final ContactMessageRepository contact;

    public ContentController(TestimonialRepository testimonials, BlogRepository blogs, GalleryRepository gallery, ContactMessageRepository contact) {
        this.testimonials = testimonials;
        this.blogs = blogs;
        this.gallery = gallery;
        this.contact = contact;
    }

    @GetMapping("/testimonials") public List<Testimonial> testimonials() { return testimonials.findByPublishedTrueOrderByCreatedAtDesc(); }
    @PostMapping("/testimonials") public Testimonial createTestimonial(@RequestBody Testimonial item) { return testimonials.save(item); }
    @GetMapping("/blogs") public List<Blog> blogs() { return blogs.findByPublishedTrueOrderByCreatedAtDesc(); }
    @GetMapping("/blogs/{slug}") public Blog blog(@PathVariable String slug) { return blogs.findBySlugAndPublishedTrue(slug).orElseThrow(); }
    @PostMapping("/blogs") public Blog createBlog(@RequestBody Blog item) { return blogs.save(item); }
    @GetMapping("/gallery") public List<GalleryItem> gallery() { return gallery.findByPublishedTrueOrderByCreatedAtDesc(); }
    @PostMapping("/gallery") public GalleryItem createGallery(@RequestBody GalleryItem item) { return gallery.save(item); }
    @PostMapping("/contact") public ContactMessage contact(@RequestBody ContactMessage item) { return contact.save(item); }
}
