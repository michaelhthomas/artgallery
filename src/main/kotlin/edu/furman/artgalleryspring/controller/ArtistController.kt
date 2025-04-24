package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artist.ArtistCreateRequest
import edu.furman.artgalleryspring.entity.Artist
import edu.furman.artgalleryspring.entity.Zip
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.ZipRepository
import org.springframework.web.bind.annotation.*

fun String?.nullIfEmpty(): String? {
    return if (this.isNullOrEmpty()) null else this
}

@RestController
@RequestMapping("/api/artist")
class ArtistController(
    private val repository: ArtistRepository,
    private val zipRepository: ZipRepository
) {
    @GetMapping
    fun getAllArtists(@RequestParam q: String?): List<Artist> =
        when (q) {
            is String -> repository.findByNameLike(q)
            else -> repository.findAll()
        }

    @GetMapping("/{id}")
    fun getArtist(@PathVariable id: Long): Artist? =
        repository.findById(id).orElse(null)

    @PostMapping
    fun createArtist(@RequestBody artist: ArtistCreateRequest): Artist {
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
            interviewerName = artist.interviewerName.nullIfEmpty(),
            // clean non-numeric characters from area code and phone number
            areaCode = artist.areaCode?.replace("\\D".toRegex(), "").nullIfEmpty(),
            telephoneNumber = artist.telephoneNumber?.replace("\\D".toRegex(), "").nullIfEmpty(),
            street = artist.street.nullIfEmpty(),
            zip = zip,
            // clean non-numeric characters from social security number
            socialSecurityNumber = artist.socialSecurityNumber?.replace("\\D".toRegex(), "").nullIfEmpty(),
            usualMedium = artist.usualMedium.nullIfEmpty(),
            usualStyle = artist.usualStyle.nullIfEmpty(),
            usualType = artist.usualType.nullIfEmpty(),
        )

        return repository.save(entity)
    }
}