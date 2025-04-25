package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.profile.ProfileResponse
import edu.furman.artgalleryspring.dto.profile.ProfileUpdateRequest
import edu.furman.artgalleryspring.entity.User
import edu.furman.artgalleryspring.exception.CustomValidationException
import edu.furman.artgalleryspring.repository.UserRepository
import org.modelmapper.ModelMapper
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/profile")
class ProfileController(
    private val userRepository: UserRepository,
    private val modelMapper: ModelMapper,
    private val passwordEncoder: PasswordEncoder,
) {

    @GetMapping
    fun getProfile(): ProfileResponse {
        val user = SecurityContextHolder.getContext().authentication.principal as User

        return modelMapper.map(user, ProfileResponse::class.java)
    }

    @Throws(CustomValidationException::class)
    @PostMapping
    fun updateProfile(@RequestBody profile: ProfileUpdateRequest): ProfileResponse {
        val user = SecurityContextHolder.getContext().authentication.principal as User

        // update basic user properties
        modelMapper.map(profile, user)
        userRepository.save(user)

        // update password (if specified)
        if (profile.currentPassword != null && profile.newPassword != null) {
            if (passwordEncoder.matches(profile.currentPassword, user.password)) {
                user.password = passwordEncoder.encode(profile.newPassword)
                userRepository.save(user)
            } else {
                throw CustomValidationException.builder()
                    .addError("currentPassword", "Password is incorrect.")
                    .build()
            }
        }

        return modelMapper.map(user, ProfileResponse::class.java)
    }
}