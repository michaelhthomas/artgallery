package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.collector.CollectorCreateRequest
import edu.furman.artgalleryspring.entity.Collector
import edu.furman.artgalleryspring.entity.Zip
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.CollectorRepository
import edu.furman.artgalleryspring.repository.ZipRepository
import org.springframework.web.bind.annotation.*
import kotlin.jvm.optionals.getOrNull

@RestController
@RequestMapping("/api/collectors")
class CollectorController(
    private val collectorRepository: CollectorRepository,
    private val zipRepository: ZipRepository,
    private val artistRepository: ArtistRepository
) {
    @GetMapping
    fun getAllCollectors(@RequestParam q: String?): List<Collector> =
        when (q) {
            is String -> collectorRepository.findByNameLike(q)
            else -> collectorRepository.findAll()
        }

    @GetMapping("/{id}")
    fun getCollectorById(@PathVariable id: String): Collector? {
        return collectorRepository.findById(id).getOrNull()
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
            interviewerName = collector.interviewerName.nullIfEmpty(),
            // clean non-numeric characters from area code and phone number
            areaCode = collector.areaCode?.replace("\\D".toRegex(), "").nullIfEmpty(),
            telephoneNumber = collector.telephoneNumber?.replace("\\D".toRegex(), "").nullIfEmpty(),
            street = collector.street.nullIfEmpty(),
            zip = zip,
            // clean non-numeric characters from social security number
            socialSecurityNumber = collector.socialSecurityNumber.replace("\\D".toRegex(), ""),
            collectionArtistId = artist,
            collectionMedium = collector.collectionMedium,
            collectionType = collector.collectionType,
            collectionStyle = collector.collectionStyle,
        )

        return collectorRepository.save(entity)
    }
}
