package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.AuthRequest
import edu.furman.artgalleryspring.dto.AuthResponse
import edu.furman.artgalleryspring.repository.UserRepository
import edu.furman.artgalleryspring.security.JwtTokenUtil
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/auth")
class AuthController(
    private val authenticationManager: AuthenticationManager,
    private val userRepository: UserRepository,
    private val jwtTokenUtil: JwtTokenUtil
) {

    @PostMapping("/login")
    fun login(@Valid @RequestBody authRequest: AuthRequest): ResponseEntity<AuthResponse> {
        try {
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(authRequest.username, authRequest.password)
            )
        } catch (e: Exception) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password")
        }

        val userDetails = userRepository.findByUsernameOrEmail(authRequest.username, authRequest.username)
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")

        val token = jwtTokenUtil.generateToken(userDetails)

        return ResponseEntity.ok(
            AuthResponse(
                token = token,
                username = userDetails.username,
                email = userDetails.email,
                firstName = userDetails.firstName,
                lastName = userDetails.lastName
            )
        )
    }
}