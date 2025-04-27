package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.buyer.BuyerCreateRequest
import edu.furman.artgalleryspring.dto.buyer.BuyerResponse
import edu.furman.artgalleryspring.entity.Buyer
import edu.furman.artgalleryspring.entity.Zip
import edu.furman.artgalleryspring.repository.BuyerRepository
import edu.furman.artgalleryspring.repository.ZipRepository
import org.springframework.web.bind.annotation.*
import java.math.BigDecimal

@RestController
@RequestMapping("/api/buyers")
class BuyerController(
    private val buyerRepository: BuyerRepository,
    private val zipRepository:   ZipRepository
) {

    /* ─────────────────────────────── GET all buyers */
    @GetMapping
    fun getAllBuyers(): List<BuyerResponse> =
        buyerRepository.findAll().map { BuyerResponse.from(it) }

    /* ─────────────────────────────── GET one buyer */
    @GetMapping("/{id}")
    fun getBuyerById(@PathVariable id: Int): BuyerResponse? =
        buyerRepository.findById(id).orElse(null)?.let { BuyerResponse.from(it) }

    /* ─────────────────────────────── POST create buyer */
    @PostMapping
    fun createBuyer(@RequestBody req: BuyerCreateRequest): BuyerResponse {

        /* look-up Zip entity if zipCode supplied, else null */
        val zip = if (!req.zipCode.isNullOrEmpty()) {
            // use existing zip if already present in the database
            zipRepository.findById(req.zipCode).orElse(
                // only create zip code if city and state are set
                if (
                    !req.city.isNullOrEmpty() &&
                    !req.state.isNullOrEmpty()
                ) Zip(
                    zip = req.zipCode,
                    city = req.city,
                    state = req.state
                ) else null
            )
        } else null

        /* helper to strip non-digits before persisting phone parts */
        fun String.cleanDigits(max: Int) =
            this.replace(Regex("\\D"), "").take(max).ifBlank { null }

        val buyer = Buyer(
            firstName = req.firstName.trim(),
            lastName  = req.lastName.trim(),
            street    = req.street?.trim(),
            zip       = zip,
            areaCode        = req.areaCode?.cleanDigits(3),
            telephoneNumber = req.telephoneNumber?.cleanDigits(7)
        )

        buyerRepository.save(buyer)
        return BuyerResponse.from(buyer)
    }
}
