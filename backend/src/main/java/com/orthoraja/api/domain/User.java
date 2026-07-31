package com.orthoraja.api.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "orthoraja_users")
public class User extends BaseEntity {
    private String name;
    private String email;
    private String passwordHash;
    private String role = "ROLE_ADMIN";
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPasswordHash() { return passwordHash; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}
