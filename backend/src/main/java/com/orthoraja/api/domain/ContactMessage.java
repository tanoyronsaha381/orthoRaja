package com.orthoraja.api.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "orthoraja_contact_messages")
public class ContactMessage extends BaseEntity {
    private String name;
    private String phone;
    private String email;
    @Column(columnDefinition = "text") private String message;
    private String status = "NEW";
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
