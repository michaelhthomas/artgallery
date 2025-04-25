package edu.furman.artgalleryspring.dto.potentialcustomer

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.*

@Schema(description = "Mailing List Signup Request")
data class MailingListSignupRequest(
    @field:Schema(description = "First name", example = "Jane")
    @field:NotBlank(message = "First name is required")
    @field:Size(max = 15, message = "First name cannot exceed 15 characters")
    val firstName: String,

    @field:Schema(description = "Last name", example = "Doe")
    @field:NotBlank(message = "Last name is required")
    @field:Size(max = 20, message = "Last name cannot exceed 20 characters")
    val lastName: String,

    @field:Schema(description = "Area code", example = "864")
    @field:Size(max = 3, message = "Area code cannot exceed 3 characters")
    var areaCode: String? = null,

    @field:Schema(description = "Telephone number", example = "5551234")
    @field:Size(max = 7, message = "Telephone number cannot exceed 7 characters")
    var telephoneNumber: String? = null,

    @field:Schema(description = "Street address", example = "123 Main St")
    @field:Size(max = 50, message = "Street address cannot exceed 50 characters")
    val street: String? = null,

    @field:Schema(description = "City", example = "Greenville")
    val city: String? = null,

    @field:Schema(description = "State", example = "SC")
    val state: String? = null,

    @field:Schema(description = "Zip code", example = "29601")
    val zipCode: String? = null,

    @field:Schema(description = "Preferred artist first name", example = "Pablo")
    val preferredArtistFirstName: String? = null,

    @field:Schema(description = "Preferred artist last name", example = "Picasso")
    val preferredArtistLastName: String? = null,

    @field:Schema(description = "Preferred medium", example = "Watercolor")
    @field:Size(max = 15, message = "Preferred medium cannot exceed 15 characters")
    val preferredMedium: String? = null,

    @field:Schema(description = "Preferred style", example = "Impressionist")
    @field:Size(max = 15, message = "Preferred style cannot exceed 15 characters")
    val preferredStyle: String? = null,

    @field:Schema(description = "Preferred type", example = "Landscape")
    @field:Size(max = 20, message = "Preferred type cannot exceed 20 characters")
    val preferredType: String? = null
)