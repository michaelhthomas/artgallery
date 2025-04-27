package edu.furman.artgalleryspring.dto.sale

import edu.furman.artgalleryspring.entity.Sale
import java.math.BigDecimal
import java.time.LocalDate

data class SaleResponse(
    val invoiceNumber: Number,
    val date: LocalDate?,
    val amountRemittedToOwner: BigDecimal?,
    val price: BigDecimal?,
    val tax: BigDecimal?,
    val salespersonName: String,
    val buyerName: String,
) {
    companion object {
        fun from(s: Sale) =
            SaleResponse(
                invoiceNumber = s.id!!,
                date = s.saleDate,
                amountRemittedToOwner = s.amountRemittedToOwner,
                price = s.salePrice,
                tax = s.saleTax,
                salespersonName = "${s.salesperson.firstName} ${s.salesperson.lastName}",
                buyerName = "${s.buyer.firstName} ${s.buyer.lastName}"
            )
    }
}
