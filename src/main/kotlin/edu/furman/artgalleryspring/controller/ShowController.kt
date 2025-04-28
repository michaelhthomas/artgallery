package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.show.ShowDetail
import edu.furman.artgalleryspring.dto.show.ShowResponse
import edu.furman.artgalleryspring.repository.ShowRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/shows")
class ShowController(private val showRepository: ShowRepository) {
    @GetMapping
    fun getAllShows(): List<ShowResponse> =
        showRepository.findAll().map { ShowResponse.from(it) }

    @GetMapping("/{title}")
    fun getShowDetails(@PathVariable title: String): ShowDetail {
        val show = showRepository.findById(title)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }
        return ShowDetail.from(show)
    }
}