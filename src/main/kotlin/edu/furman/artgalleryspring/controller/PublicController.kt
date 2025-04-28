package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.artist.ArtistResponse
import edu.furman.artgalleryspring.dto.show.ShowResponse
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.ShowRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
@RequestMapping("/api/public")
class PublicController(
    private val showRepository: ShowRepository,
    private val artistRepository: ArtistRepository
) {
    @GetMapping("/exhibitions")
    fun getCurrentExhibitions(): List<ShowResponse> =
        showRepository
            .findAllByShowOpeningDateBeforeAndShowClosingDateAfter(LocalDate.now(), LocalDate.now())
            .map { ShowResponse.from(it) }

    @GetMapping("/artists")
    fun getFeaturedArtists(): List<ArtistResponse> =
        artistRepository
            .findAll()
            .take(4)
            .map { ArtistResponse.from(it) }
}