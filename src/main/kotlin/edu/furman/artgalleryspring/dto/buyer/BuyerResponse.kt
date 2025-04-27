package edu.furman.artgalleryspring.dto.buyer

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal
import edu.furman.artgalleryspring.entity.Buyer

@Schema(description = "Buyer Response DTO")
data class BuyerResponse(
    @field:Schema(description = "Buyer ID", example = "12")
    val id: Int,

    @field:Schema(description = "First name", example = "Alice")
    val firstName: String,

    @field:Schema(description = "Last name", example = "Campbell")
    val lastName: String,

    @field:Schema(description = "Street address", example = "123 Main St")
    val street: String? = null,

    @field:Schema(description = "ZIP code", example = "29613")
    val zipCode: String? = null,

    @field:Schema(description = "Area code (3 digits)", example = "864")
    val areaCode: String? = null,

    @field:Schema(description = "Telephone number (7 digits)", example = "5551234")
    val telephoneNumber: String? = null,

    @field:Schema(description = "Purchases last year (USD)", example = "1500.00")
    val purchasesLastYear: BigDecimal? = null,

    @field:Schema(description = "Purchases year-to-date (USD)", example = "300.00")
    val purchasesYearToDate: BigDecimal? = null
) {
    companion object {
        /** Convenience mapper: `Buyer` → `BuyerResponse`. */
        fun from(b: Buyer) = BuyerResponse(
            id                   = b.id ?: 0,
            firstName            = b.firstName.orEmpty(),
            lastName             = b.lastName.orEmpty(),
            street               = b.street,
            zipCode              = b.zip?.zip,
            areaCode             = b.areaCode,
            telephoneNumber      = b.telephoneNumber,
            purchasesLastYear    = b.purchasesLastYear,
            purchasesYearToDate  = b.purchasesYearToDate
        )
    }
}
