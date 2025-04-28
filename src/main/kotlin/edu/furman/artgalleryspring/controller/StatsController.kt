package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.StatsResponse
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.ArtworkRepository
import edu.furman.artgalleryspring.repository.CollectorRepository
import edu.furman.artgalleryspring.repository.ShowRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
@RequestMapping("/api/stats")
class StatsController(
    private val artworkRepository: ArtworkRepository,
    private val showRepository: ShowRepository,
    private val artistRepository: ArtistRepository,
    private val collectorRepository: CollectorRepository
) {
    @GetMapping
    fun getStats(): StatsResponse {
        return StatsResponse(
            totalArtworks = artworkRepository.count(),
            newArtworksMonth = artworkRepository
                .countByDateListedBetween(LocalDate.now().withDayOfMonth(1), LocalDate.now()),
            activeExhibitions = showRepository
                .countByShowOpeningDateBeforeAndShowClosingDateAfter(LocalDate.now(), LocalDate.now()),
            exhibitionsInNextWeek = showRepository
                .countByShowOpeningDateBetween(LocalDate.now(), LocalDate.now().plusDays(7)),
            totalArtists = artistRepository.count(),
            newArtistsMonth = artistRepository
                .countByInterviewDateBetween(LocalDate.now().withDayOfMonth(1), LocalDate.now()),
            totalCollectors = collectorRepository.count(),
            newCollectorsMonth = collectorRepository
                .countByInterviewDateBetween(LocalDate.now().withDayOfMonth(1), LocalDate.now()),
        )
    }
}