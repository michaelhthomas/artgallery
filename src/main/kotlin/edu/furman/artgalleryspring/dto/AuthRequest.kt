package edu.furman.artgalleryspring.dto

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Size

@Schema(description = "API Login and Authorization Request")
data class AuthRequest(
    @field:Schema(description = "Username", example = "admin")
    @field:NotBlank(message = "Username is required!")
    val username: String,

    @field:Schema(description = "Password", example = "admin123")
    @field:NotBlank(message = "Password is required")
    @field:Size(min = 6, message = "Password must be at least 6 characters")
    val password: String
)
