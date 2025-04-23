package edu.furman.artgalleryspring.dto.artist

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.*
import java.time.LocalDate

@Schema(description = "Artist Creation Request")
data class ArtistCreateRequest(
    @field:Schema(description = "First name", example = "Bob")
    @field:NotBlank(message = "First name is required")
    val firstName: String,
    
    @field:Schema(description = "Last name", example = "Smith")
    @field:NotBlank(message = "Last name is required")
    val lastName: String,
    
    @field:Schema(description = "Date of interview", example = "2023-01-01")
    val interviewDate: LocalDate? = null,

    @field:Schema(description = "Interviewer name", example = "Kevin Treu")
    val interviewerName: String? = null,
    
    @field:Schema(description = "Area code", example = "123")
    val areaCode: String? = null,
    
    @field:Schema(description = "Telephone number", example = "1234567")
    val telephoneNumber: String? = null,
    
    @field:Schema(description = "Street address", example = "123 Main St")
    val street: String? = null,
    
    @field:Schema(description = "City", example = "Anytown")
    val city: String? = null,
    
    @field:Schema(description = "State", example = "CA")
    val state: String? = null,
    
    @field:Schema(description = "Zip code", example = "12345")
    val zipCode: String? = null,
    
    @field:Schema(description = "Social security number", example = "123-45-6789")
    val socialSecurityNumber: String? = null,
    
    @field:Schema(description = "Usual medium", example = "Oil")
    val usualMedium: String? = null,
    
    @field:Schema(description = "Usual style", example = "Abstract")
    val usualStyle: String? = null,
    
    @field:Schema(description = "Usual type", example = "Painting")
    val usualType: String? = null,
)
