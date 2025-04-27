package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artwork.ArtworkCreateRequest
import edu.furman.artgalleryspring.dto.artwork.ArtworkListingResponse
import edu.furman.artgalleryspring.dto.artwork.ArtworkResponse
import edu.furman.artgalleryspring.entity.Artwork
import edu.furman.artgalleryspring.repository.*
import org.springframework.web.bind.annotation.*
import java.math.BigDecimal

@RestController
@RequestMapping("/api/artworks")
class ArtworkController(
    private val artworkRepository: ArtworkRepository,
    private val artistRepository: ArtistRepository,
    private val collectorRepository: CollectorRepository,
    private val assetRepository: AssetRepository,
    private val saleRepository: SaleRepository
) {
    @GetMapping
    fun getAllArtworks(): List<ArtworkResponse> =
        artworkRepository.findAll().map { artwork ->
            ArtworkResponse.from(artwork)
        }

    @GetMapping("/{id}")
    fun getArtworkById(@PathVariable id: Int): ArtworkListingResponse? {
        val artwork = artworkRepository.findById(id).orElse(null) ?: return null
        val sale = saleRepository.findByArtwork_Id(id)

        return ArtworkListingResponse.from(artwork, sale)
    }

    @PostMapping
    fun createArtwork(@RequestBody artworkRequest: ArtworkCreateRequest): ArtworkResponse {
        val artist = artistRepository.findById(artworkRequest.artistId).orElseThrow {
            IllegalArgumentException("Artist with ID ${artworkRequest.artistId} not found.")
        }

        val workImage = artworkRequest.workImage?.let { imageId ->
            assetRepository.findById(imageId).orElse(null)
        }

        val collector = artworkRequest.collectorSocialSecurityNumber?.let { ssn ->
            collectorRepository.findById(ssn).orElse(null)
        }

        val artwork = Artwork(
            artist = artist,
            workImage = workImage,
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
        return ArtworkResponse.from(artwork)
    }
}
