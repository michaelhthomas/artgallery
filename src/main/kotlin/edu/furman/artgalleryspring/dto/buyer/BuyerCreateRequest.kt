package edu.furman.artgalleryspring.dto.buyer

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.*
import java.math.BigDecimal

@Schema(description = "Buyer Creation Request")
data class BuyerCreateRequest(

    /* ───── Required names ─────────────────────────────────────────────── */
    @field:Schema(description = "First name", example = "Alice")
    @field:NotBlank(message = "First name is required")
    @field:Size(max = 15, message = "First name must be ≤ 15 characters")
    val firstName: String,

    @field:Schema(description = "Last name", example = "Campbell")
    @field:NotBlank(message = "Last name is required")
    @field:Size(max = 20, message = "Last name must be ≤ 20 characters")
    val lastName: String,

    /* ───── Optional address info ──────────────────────────────────────── */
    @field:Schema(description = "Street address", example = "123 Main St")
    @field:Size(max = 50, message = "Street must be ≤ 50 characters")
    val street: String? = null,

    @field:Schema(description = "ZIP code (must exist in Zip table)", example = "29613")
    val zipCode: String? = null,

    @field:Schema(description = "City", example = "Anytown")
    val city: String? = null,

    @field:Schema(description = "State", example = "CA")
    val state: String? = null,

    /* ───── Optional phone ─────────────────────────────────────────────── */
    @field:Schema(description = "Area code (3 digits)", example = "864")
    @field:Pattern(regexp = "\\d{3}", message = "Area code must be 3 digits")
    val areaCode: String? = null,

    @field:Schema(description = "Telephone number (7 digits)", example = "5551234")
    @field:Pattern(regexp = "\\d{7}", message = "Telephone number must be 7 digits")
    val telephoneNumber: String? = null,

)
