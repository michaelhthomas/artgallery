package edu.furman.artgalleryspring.dto.profile

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "User profile information update")
data class ProfileUpdateRequest (
    @field:Schema(description = "First name of the user.", example = "John")
    val firstName: String? = null,

    @field:Schema(description = "Last name of the user.", example = "Smith")
    val lastName: String? = null,

    @field:Schema(description = "Email of the user.", example = "john.smith@gmail.com")
    val email: String? = null,

    @field:Schema(description = "URL to an avatar image for the user.", example = "https://example.com")
    val avatarUrl: String? = null,

    @field:Schema(description = "User's current password", example = "password123")
    val currentPassword: String? = null,

    @field:Schema(description = "New password for the user", example = "password123")
    val newPassword: String? = null
)
