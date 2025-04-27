package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artwork.ArtworkResponse
import edu.furman.artgalleryspring.dto.collector.CollectorCreateRequest
import edu.furman.artgalleryspring.dto.collector.CollectorResponse
import edu.furman.artgalleryspring.entity.Collector
import edu.furman.artgalleryspring.entity.Zip
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.CollectorRepository
import edu.furman.artgalleryspring.repository.ZipRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/collectors")
class CollectorController(
    private val collectorRepository: CollectorRepository,
    private val zipRepository: ZipRepository,
    private val artistRepository: ArtistRepository
) {
    @GetMapping
    fun getAllCollectors(@RequestParam q: String?): List<CollectorResponse> =
        when (q) {
            is String -> collectorRepository.findByNameLike(q)
            else -> collectorRepository.findAll()
        }.map { CollectorResponse.from(it) }

    @GetMapping("/{id}")
    fun getCollector(@PathVariable id: String): CollectorResponse? {
        val collector = collectorRepository.findById(id)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }
        return CollectorResponse.from(collector)
    }

    @GetMapping("/{id}/works")
    fun getCollectorWorks(@PathVariable id: String): List<ArtworkResponse> {
        val collector = collectorRepository.findById(id)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }
        return collector.artworks.map { ArtworkResponse.from(it) }
    }

    @PostMapping
    fun createCollector(@RequestBody collector: CollectorCreateRequest): Collector {
        val zip = if (!collector.zipCode.isNullOrEmpty()) {
            // use existing zip if already present in the database
            zipRepository.findById(collector.zipCode).orElse(
                // only create zip code if city and state are set
                if (
                    !collector.city.isNullOrEmpty() &&
                    !collector.state.isNullOrEmpty()
                ) Zip(
                    zip = collector.zipCode,
                    city = collector.city,
                    state = collector.state
                ) else null
            )
        } else null

        val artist = if (collector.preferredArtistFirstName != null && collector.preferredArtistLastName != null)
            artistRepository.findByFirstNameAndLastName(
                collector.preferredArtistFirstName,
                collector.preferredArtistLastName
            ).orElse(null)
        else null

        // Convert to collector
        val entity = Collector(
            firstName = collector.firstName,
            lastName = collector.lastName,
            interviewDate = collector.interviewDate,
            interviewerName = collector.interviewerName,
            // clean non-numeric characters from area code and phone number
            areaCode = collector.areaCode.toNumeric(),
            telephoneNumber = collector.telephoneNumber.toNumeric(),
            street = collector.street,
            zip = zip,
            // clean non-numeric characters from social security number
            socialSecurityNumber = collector.socialSecurityNumber.toNumeric().orEmpty(),
            collectionArtistId = artist,
            collectionMedium = collector.collectionMedium,
            collectionType = collector.collectionType,
            collectionStyle = collector.collectionStyle,
        )

        return collectorRepository.save(entity)
    }
}
