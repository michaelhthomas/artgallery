package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Collector
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CollectorRepository : JpaRepository<Collector, Long> {
    @Query("SELECT u FROM #{#entityName} u WHERE CONCAT(u.firstName, ' ', u.lastName) LIKE %?1%")
    fun findByNameLike(name: String): List<Collector>
}
