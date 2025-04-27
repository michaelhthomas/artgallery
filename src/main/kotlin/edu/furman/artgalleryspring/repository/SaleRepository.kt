package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Sale
import org.springframework.data.jpa.repository.JpaRepository

interface SaleRepository : JpaRepository<Sale, Int> {
    fun findByArtwork_Id(id: Int): Sale?
}