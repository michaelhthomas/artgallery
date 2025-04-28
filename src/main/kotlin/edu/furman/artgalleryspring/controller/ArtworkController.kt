package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artwork.*
import edu.furman.artgalleryspring.entity.Artwork
import edu.furman.artgalleryspring.repository.*
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import jakarta.annotation.security.PermitAll
import org.springframework.web.server.ResponseStatusException
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

    @GetMapping("/search")
    fun search(
        @RequestParam artistName: String?,
        @RequestParam type: String?,
        @RequestParam medium: String?,
        @RequestParam style: String?,
    ): List<ArtworkResponse> =
        artworkRepository.search(ArtworkSearchRequest(
            artistName = artistName,
            type = type,
            medium = medium,
            style = style,
        )).map(ArtworkResponse::from)


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
            status = "for sale",
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

    @PostMapping("/{id}")
    fun updateArtwork(@PathVariable id: Int, @RequestBody artworkRequest: ArtworkCreateRequest): ArtworkResponse {
        val artwork = artworkRepository.findById(id)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }

        artwork.artist = artistRepository.findById(artworkRequest.artistId).orElse(artwork.artist)

        artwork.workImage = artworkRequest.workImage?.let {
            assetRepository.findById(it).orElse(null)
        }
        artwork.collector = artworkRequest.collectorSocialSecurityNumber?.let {
            collectorRepository.findById(it).orElse(null)
        }

        artwork.workTitle = artworkRequest.workTitle
        artwork.workYearCompleted = artworkRequest.workYearCompleted
        artwork.workMedium = artworkRequest.workMedium
        artwork.workStyle = artworkRequest.workStyle
        artwork.workType = artworkRequest.workType
        artwork.workSize = artworkRequest.workSize
        artwork.dateListed = artworkRequest.dateListed
        artwork.askingPrice = artworkRequest.askingPrice.toCleanBigDecimal()

        val saved = artworkRepository.save(artwork)
        return ArtworkResponse.from(saved)
    }
}
