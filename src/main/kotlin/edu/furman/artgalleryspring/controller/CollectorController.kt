package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.entity.Collector
import edu.furman.artgalleryspring.repository.CollectorRepository
import kotlin.jvm.optionals.getOrNull
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/collectors")
class CollectorController(private val collectorRepository: CollectorRepository) {
    @GetMapping
    fun getAllCollectors(@RequestParam q: String?): List<Collector> =
        when (q) {
            is String -> collectorRepository.findByNameLike(q)
            else -> collectorRepository.findAll()
        }

    @GetMapping("/{id}")
    fun getCollectorById(@PathVariable id: Long): Collector? {
        return collectorRepository.findById(id).getOrNull()
    }
}
