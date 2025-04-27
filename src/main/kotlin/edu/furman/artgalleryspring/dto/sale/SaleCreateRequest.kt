package edu.furman.artgalleryspring.dto.sale

import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.*
import java.math.BigDecimal
import java.time.LocalDate

@Schema(description = "Sale Creation Request")
data class SaleCreateRequest(

    @field:Schema(description = "Artwork ID being sold", example = "42")
    @field:NotNull(message = "Artwork ID is required")
    val artworkId: Int,

    @field:Schema(description = "Buyer ID", example = "7")
    @field:NotNull(message = "Buyer ID is required")
    val buyerId: Int,

    @field:Schema(
        description = "Sale date (YYYY-MM-DD). " +
                "Defaults to today's date if omitted",
        example = "2025-04-26"
    )
    val saleDate: LocalDate? = null,

    @field:Schema(description = "Sale price in USD", example = "12500.00")
    @field:DecimalMin(value = "0.0", inclusive = false,
        message = "Sale price must be positive")
    val salePrice: String? = null,

    @field:Schema(description = "Sales tax in USD", example = "750.00")
    val saleTax: String? = null,

    @field:Schema(
        description = "Amount remitted to owner in USD",
        example = "10000.00"
    )
    val amountRemittedToOwner: String? = null,

    @field:Schema(
        description = "Social-security number of the salesperson " +
        "who handled the sale (exactly 9 digits)",
        example = "123456789"
    )
    @field:NotBlank(message = "Salesperson SSN is required")
    @field:Pattern(regexp = "\\d{9}",
        message = "Salesperson SSN must be 9 digits (no dashes)")
    val salespersonSsn: String
)
