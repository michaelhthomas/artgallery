package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Sale
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDate

interface SaleRepository : JpaRepository<Sale, Int> {
    fun findByArtwork_Id(id: Int): Sale?
    fun findAllBySaleDateBetween(saleDateAfter: LocalDate, saleDateBefore: LocalDate): MutableList<Sale>
}