package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.dto.artwork.ArtworkSearchRequest
import edu.furman.artgalleryspring.entity.Artwork
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.time.LocalDate
import org.springframework.data.repository.query.Param

interface ArtworkRepository : JpaRepository<Artwork, Int> {
    // this is a performance optimization to make sure artworks are loaded
    // with a single query, not N+1 queries
    @Query("SELECT a FROM Artwork a JOIN FETCH a.artist LEFT JOIN FETCH a.artist.zip LEFT JOIN FETCH a.sale")
    override fun findAll(): MutableList<Artwork>

    fun countByDateListedBetween(dateListedAfter: LocalDate, dateListedBefore: LocalDate): Long

    @Query(
        """
        SELECT DISTINCT a
        FROM   Artwork a
        JOIN   a.artist ar
        WHERE  a.status = 'for sale'
          AND  (:#{#req.artistName} IS NULL OR
                   LOWER(CONCAT(CONCAT(ar.firstName, ' '), ar.lastName))
                       LIKE LOWER(CONCAT('%', :#{#req.artistName}, '%')))
          AND  (:#{#req.type}   IS NULL OR a.workType   = :#{#req.type})
          AND  (:#{#req.medium} IS NULL OR a.workMedium = :#{#req.medium})
          AND  (:#{#req.style}  IS NULL OR a.workStyle  = :#{#req.style})
        """
    )
    fun search(@Param("req") req: ArtworkSearchRequest): List<Artwork>
}