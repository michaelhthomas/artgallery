package edu.furman.artgalleryspring.dto

data class StatsResponse(
    val totalArtworks: Long,
    val newArtworksMonth: Long,
    val activeExhibitions: Long,
    val exhibitionsInNextWeek: Long,
    val totalArtists: Long,
    val newArtistsMonth: Long,
    val totalCollectors: Long,
    val newCollectorsMonth: Long,
)
