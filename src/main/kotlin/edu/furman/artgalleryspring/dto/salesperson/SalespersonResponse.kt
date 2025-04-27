package edu.furman.artgalleryspring.dto.salesperson

import io.swagger.v3.oas.annotations.media.Schema
import edu.furman.artgalleryspring.entity.Salesperson

@Schema(description = "Salesperson Response DTO")
data class SalespersonResponse(

    @field:Schema(description = "Social-security number (9 digits)", example = "123456789")
    val socialSecurityNumber: String,

    @field:Schema(description = "First name", example = "Grace")
    val firstName: String,

    @field:Schema(description = "Last name", example = "Hopper")
    val lastName: String,

    @field:Schema(description = "Street address", example = "42 BUG Blvd.")
    val street: String? = null,

    @field:Schema(description = "ZIP code", example = "29613")
    val zipCode: String? = null
) {

    /** Convenience mapper: `Salesperson` → `SalespersonResponse`. */
    companion object {
        fun from(sp: Salesperson) = SalespersonResponse(
            socialSecurityNumber = sp.socialSecurityNumber.orEmpty(),
            firstName            = sp.firstName.orEmpty(),
            lastName             = sp.lastName.orEmpty(),
            street               = sp.street,
            zipCode              = sp.zip?.zip
        )
    }
}
