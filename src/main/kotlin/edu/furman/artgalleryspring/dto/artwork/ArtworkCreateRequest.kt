package edu.furman.artgalleryspring.dto.artwork

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.*
import java.math.BigDecimal
import java.time.LocalDate

@Schema(description = "Artwork Creation Request")
data class ArtworkCreateRequest(
    @field:Schema(description = "Artist ID", example = "1")
    @field:NotNull(message = "Artist ID is required")
    val artistId: Int,

    @field:Schema(description = "Title of the artwork", example = "Starry Night")
    @field:NotBlank(message = "Work title is required")
    @field:Size(min = 2, max = 50, message = "Work title must be between 2 and 50 characters")
    val workTitle: String,

    @field:Schema(description = "Year completed", example = "1889")
    @field:NotBlank(message = "Year completed is required")
    @field:Size(min = 4, max = 4, message = "Year completed must be 4 characters")
    val workYearCompleted: String,

    @field:Schema(description = "Medium", example = "Oil")
    @field:NotBlank(message = "Medium is required")
    @field:Size(min = 2, max = 15, message = "Medium must be between 2 and 15 characters")
    val workMedium: String,

    @field:Schema(description = "Style", example = "Abstract")
    @field:NotBlank(message = "Style is required")
    @field:Size(min = 2, max = 15, message = "Style must be between 2 and 15 characters")
    val workStyle: String,

    @field:Schema(description = "Type", example = "Painting")
    @field:NotBlank(message = "Type is required")
    @field:Size(min = 2, max = 20, message = "Type must be between 2 and 20 characters")
    val workType: String,

    @field:Schema(description = "Size", example = "24x36")
    @field:NotBlank(message = "Size is required")
    @field:Size(min = 2, max = 15, message = "Size must be between 2 and 15 characters")
    val workSize: String,

    @field:Schema(description = "Collector's social security number", example = "123456789")
    @field:Size(min = 9, max = 9, message = "Social security number must be 9 characters")
    val collectorSocialSecurityNumber: String? = null,

    @field:Schema(description = "Date listed", example = "2023-01-01")
    val dateListed: LocalDate? = null,

    @field:Schema(description = "Asking price in USD", example = "5000")
    @field:Min(value = 0, message = "Asking price must be positive")
    val askingPrice: String? = null
)