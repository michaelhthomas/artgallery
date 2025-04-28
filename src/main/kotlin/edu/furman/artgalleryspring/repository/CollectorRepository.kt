package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Collector
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface CollectorRepository : JpaRepository<Collector, String> {
    @Query("SELECT u FROM #{#entityName} u WHERE CONCAT(u.firstName, ' ', u.lastName) LIKE %?1%")
    fun findByNameLike(name: String): List<Collector>

    fun countByInterviewDateBetween(interviewDateAfter: LocalDate, interviewDateBefore: LocalDate): Long
}
