package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artist.ArtistCreateRequest
import edu.furman.artgalleryspring.dto.artist.ArtistResponse
import edu.furman.artgalleryspring.dto.artwork.ArtworkResponse
import edu.furman.artgalleryspring.entity.Artist
import edu.furman.artgalleryspring.entity.Zip
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.ArtworkRepository
import edu.furman.artgalleryspring.repository.ZipRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

fun String?.toNumeric(): String? {
    val numeric = this?.replace("\\D".toRegex(), "")
    return if (numeric.isNullOrEmpty()) null else numeric
}

@RestController
@RequestMapping("/api/artist")
class ArtistController(
    private val repository: ArtistRepository,
    private val zipRepository: ZipRepository,
) {
    @GetMapping
    fun getAllArtists(@RequestParam q: String?): List<ArtistResponse> =
        when (q) {
            is String -> repository.findByNameLike(q)
            else -> repository.findAll()
        }.map { ArtistResponse.from(it) }

    @GetMapping("/{id}")
    fun getArtist(@PathVariable id: Int): ArtistResponse? =
        ArtistResponse.from(
            repository.findById(id).orElseThrow {
                ResponseStatusException(HttpStatus.NOT_FOUND)
            }
        )

    @GetMapping("/{id}/works")
    fun getArtistWorks(@PathVariable id: Int): List<ArtworkResponse> {
        val artist = repository.findById(id).orElseThrow {
            ResponseStatusException(HttpStatus.NOT_FOUND)
        }
        return artist.artworks
            // exclude works owned by a collector
            .filter { it.collector == null }
            .map { ArtworkResponse.from(it) }
    }

    @PostMapping
    fun createArtist(@RequestBody artist: ArtistCreateRequest): ArtistResponse {
        val zip = if (!artist.zipCode.isNullOrEmpty()) {
            // use existing zip if already present in the database
            zipRepository.findById(artist.zipCode).orElse(
                // only create zip code if city and state are set
                if (
                    !artist.city.isNullOrEmpty() &&
                    !artist.state.isNullOrEmpty()
                ) Zip(
                    zip = artist.zipCode,
                    city = artist.city,
                    state = artist.state
                ) else null
            )
        } else null

        // Convert to artist
        val entity = Artist(
            firstName = artist.firstName,
            lastName = artist.lastName,
            interviewDate = artist.interviewDate,
            interviewerName = artist.interviewerName,
            // clean non-numeric characters from area code and phone number
            areaCode = artist.areaCode.toNumeric(),
            telephoneNumber = artist.telephoneNumber.toNumeric(),
            street = artist.street,
            zip = zip,
            // clean non-numeric characters from social security number
            socialSecurityNumber = artist.socialSecurityNumber.toNumeric(),
            usualMedium = artist.usualMedium,
            usualStyle = artist.usualStyle,
            usualType = artist.usualType,
        )

        val saved = repository.save(entity)
        return ArtistResponse.from(saved)
    }
}