package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.entity.Artist
import edu.furman.artgalleryspring.entity.User
import edu.furman.artgalleryspring.repository.ArtistRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/artist")
class ArtistController(
    private val repository: ArtistRepository
) {
    @GetMapping
    fun getAllArtists(@RequestParam q: String?): List<Artist> =
        when (q) {
            is String -> repository.findByNameLike(q)
            else -> repository.findAll()
        }

    @PostMapping
    fun createArtist(artist: Artist): Artist {
        return repository.save(artist)
    }
}