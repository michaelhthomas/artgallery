package edu.furman.artgalleryspring.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(
    name = "ValidationErrorResponse",
    description = "Structured response returned when validation fails"
)
data class ValidationErrorResponse(
    @Schema(
        description = "Human-readable error summary message",
        example = "Validation failed with 2 errors",
        type = "string"
    )
    val message: String,

    @Schema(
        description = "Map of field names to lists of error messages",
        example = """{"email":["Invalid format","Email already in use"],"password":["Too weak"]}"""
    )
    val errors: Map<String, List<String>>
)
