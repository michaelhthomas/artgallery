package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.ArtShow
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDate

interface ShowRepository : JpaRepository<ArtShow, String> {
    fun countByShowOpeningDateBeforeAndShowClosingDateAfter(
        showOpeningDateBefore: LocalDate,
        showClosingDateAfter: LocalDate
    ): Long

    fun countByShowOpeningDateBetween(
        showOpeningDateAfter: LocalDate,
        showOpeningDateBefore: LocalDate
    ): Long

    fun findAllByShowOpeningDateBeforeAndShowClosingDateAfter(
        showOpeningDateBefore: LocalDate,
        showClosingDateAfter: LocalDate
    ): MutableList<ArtShow>
}