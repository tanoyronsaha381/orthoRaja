package com.orthoraja.api.web;

import com.orthoraja.api.dto.AuthRequest;
import com.orthoraja.api.dto.AuthResponse;
import com.orthoraja.api.repository.UserRepository;
import com.orthoraja.api.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserRepository users;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(UserRepository users, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.users = users;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        var user = users.findByEmail(request.email()).orElseThrow();
        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new IllegalArgumentException("Invalid credentials");
        }
        return new AuthResponse(jwtService.issue(user.getEmail(), user.getRole()), user.getRole());
    }
}
