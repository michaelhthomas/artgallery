package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.sale.SaleCreateRequest
import edu.furman.artgalleryspring.dto.sale.SaleResponse
import edu.furman.artgalleryspring.entity.Sale
import edu.furman.artgalleryspring.repository.*
import org.springframework.web.bind.annotation.*
import java.math.BigDecimal
import java.time.LocalDate

@RestController
@RequestMapping("/api/sales")
class SaleController(
    private val saleRepository:        SaleRepository,
    private val artworkRepository:     ArtworkRepository,
    private val buyerRepository:       BuyerRepository,
    private val salespersonRepository: SalespersonRepository        // ← NEW
) {

    /* ───────────────────────────────────────── GET all */
    @GetMapping
    fun getAllSales(): List<SaleResponse> =
        saleRepository.findAll().map(SaleResponse::from)

    @GetMapping("/week")
    fun getSalesLastWeek(): List<SaleResponse> = saleRepository
        .findAllBySaleDateBetween(LocalDate.now().minusWeeks(1), LocalDate.now())
        .map { SaleResponse.from(it) }

    /* ───────────────────────────────────────── GET one */
    @GetMapping("/{id}")
    fun getSaleById(@PathVariable id: Int): SaleResponse? =
        saleRepository.findById(id).orElse(null)?.let(SaleResponse::from)

    /* ───────────────────────────────────────── POST create */
    @PostMapping
    fun createSale(@RequestBody request: SaleCreateRequest): SaleResponse {

        /* look-up related entities */
        val artwork = artworkRepository.findById(request.artworkId).orElseThrow {
            IllegalArgumentException("Artwork ${request.artworkId} not found.")
        }

        val buyer = buyerRepository.findById(request.buyerId).orElseThrow {
            IllegalArgumentException("Buyer ${request.buyerId} not found.")
        }

        val salesperson = salespersonRepository.findById(request.salespersonSsn).orElseThrow {
            IllegalArgumentException("Salesperson SSN ${request.salespersonSsn} not found.")
        }

        /* helper to strip non-digits before BigDecimal */
        fun String.toCleanBigDecimal(): BigDecimal =
            BigDecimal(this.replace(Regex("[^0-9.]"), ""))

        /* build and save entity */
        val sale = Sale(
            artwork  = artwork,
            buyer    = buyer,
            salesperson = salesperson,                       // ← PASS IT
            saleDate = request.saleDate ?: LocalDate.now(),
            salePrice = request.salePrice?.toCleanBigDecimal(),
            saleTax   = request.saleTax?.toCleanBigDecimal(),
            amountRemittedToOwner = request.amountRemittedToOwner?.toCleanBigDecimal()
        )

        return SaleResponse.from(saleRepository.save(sale))
    }
}
