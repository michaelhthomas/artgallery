package edu.furman.artgalleryspring.dto.collector

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.NotBlank
import java.time.LocalDate

@Schema(description = "Collector Creation Request")
data class CollectorCreateRequest(
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
    val socialSecurityNumber: String,

    @field:Schema(description = "Preferred artist first name", example = "Pablo")
    val preferredArtistFirstName: String? = null,

    @field:Schema(description = "Preferred artist last name", example = "Picasso")
    val preferredArtistLastName: String? = null,

    @field:Schema(description = "Collection medium", example = "Oil")
    val collectionMedium: String? = null,

    @field:Schema(description = "Collection style", example = "Abstract")
    val collectionStyle: String? = null,

    @field:Schema(description = "Collection type", example = "Painting")
    val collectionType: String? = null,
)
