package edu.furman.artgalleryspring.dto.artwork

import java.math.BigDecimal
import java.time.LocalDate

data class ArtworkResponse(
    val id: Int,
    val artistId: Int,
    val workTitle: String?,
    val workYearCompleted: String?,
    val workMedium: String?,
    val workStyle: String?,
    val workType: String?,
    val workSize: String?,
    val collectorId: String?,
    val dateListed: LocalDate?,
    val askingPrice: BigDecimal?
)