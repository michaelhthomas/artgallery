package edu.furman.artgalleryspring.exception

import edu.furman.artgalleryspring.dto.ValidationErrorResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestControllerAdvice
class GlobalExceptionHandler {

    /**
     * Handles ValidationException by returning a structured error response
     * with HTTP status code 422 (Unprocessable Entity)
     */
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ExceptionHandler(CustomValidationException::class)
    fun handleValidationException(ex: CustomValidationException): ResponseEntity<ValidationErrorResponse> {
        val errorResponse = ValidationErrorResponse(
            message = ex.message ?: "Validation failed",
            errors = ex.errors
        )

        return ResponseEntity(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY)
    }
}