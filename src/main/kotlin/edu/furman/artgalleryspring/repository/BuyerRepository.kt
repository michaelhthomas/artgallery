package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Buyer
import org.springframework.data.jpa.repository.JpaRepository

interface BuyerRepository : JpaRepository<Buyer, Int> {
}
