package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artwork.ArtworkCreateRequest
import edu.furman.artgalleryspring.dto.artwork.ArtworkResponse
import edu.furman.artgalleryspring.entity.Artwork
import edu.furman.artgalleryspring.repository.ArtworkRepository
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.CollectorRepository
import org.springframework.beans.propertyeditors.StringTrimmerEditor
import org.springframework.web.bind.WebDataBinder
import org.springframework.web.bind.annotation.*
import java.math.BigDecimal
import kotlin.jvm.optionals.getOrNull

@RestController
@RequestMapping("/api/artworks")
class ArtworkController(
    private val artworkRepository: ArtworkRepository,
    private val artistRepository: ArtistRepository,
    private val collectorRepository: CollectorRepository
) {
    companion object {
        fun artworkToArtworkResponse(artwork: Artwork): ArtworkResponse {
            return ArtworkResponse(
                id = artwork.id!!,
                artistId = artwork.artist.artistId!!,                  // only the ID
                workTitle = artwork.workTitle,
                workYearCompleted = artwork.workYearCompleted,
                workMedium = artwork.workMedium,
                workStyle = artwork.workStyle,
                workType = artwork.workType,
                workSize = artwork.workSize,
                collectorId = artwork.collector?.socialSecurityNumber,            // collector can be null
                dateListed = artwork.dateListed,
                askingPrice = artwork.askingPrice
            )
        }
    }

    @InitBinder
    fun initBinder(binder: WebDataBinder) {
        // Automatically trims all incoming Strings
        // If a String is empty after trimming, converts it to null
        binder.registerCustomEditor(String::class.java, StringTrimmerEditor(true))
    }

    @GetMapping
    fun getAllArtworks(): List<ArtworkResponse> =
        artworkRepository.findAll().map { artwork ->
            artworkToArtworkResponse(artwork)
        }

    @GetMapping("/{id}")
    fun getArtworkById(@PathVariable id: Int): ArtworkResponse? {
        val artwork = artworkRepository.findById(id).orElse(null) ?: return null

        return artworkToArtworkResponse(artwork)
    }


    @PostMapping
    fun createArtwork(@RequestBody artworkRequest: ArtworkCreateRequest): ArtworkResponse {
        val artist = artistRepository.findById(artworkRequest.artistId).orElseThrow {
            IllegalArgumentException("Artist with ID ${artworkRequest.artistId} not found.")
        }

        val collector = artworkRequest.collectorSocialSecurityNumber?.let { ssn ->
            collectorRepository.findById(ssn).orElse(null)
        }

        val artwork = Artwork(
            artist = artist,
            workTitle = artworkRequest.workTitle,
            workYearCompleted = artworkRequest.workYearCompleted,
            workMedium = artworkRequest.workMedium,
            workStyle = artworkRequest.workStyle,
            workType = artworkRequest.workType,
            workSize = artworkRequest.workSize,
            collector = collector,
            dateListed = artworkRequest.dateListed,
            askingPrice = if (artworkRequest.askingPrice != null) {
                BigDecimal(artworkRequest.askingPrice.replace(Regex("[^0-9.]"), ""))
            } else null
        )

        artworkRepository.save(artwork)
        return artworkToArtworkResponse(artwork)
    }
}
