package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Artist
import edu.furman.artgalleryspring.entity.Artwork
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.time.LocalDate

interface ArtworkRepository : JpaRepository<Artwork, Int> {
    // this is a performance optimization to make sure artworks are loaded
    // with a single query, not N+1 queries
    @Query("SELECT a FROM Artwork a JOIN FETCH a.artist LEFT JOIN FETCH a.artist.zip LEFT JOIN FETCH a.sale")
    override fun findAll(): MutableList<Artwork>
    fun countByDateListedBetween(dateListedAfter: LocalDate, dateListedBefore: LocalDate): Long
}
