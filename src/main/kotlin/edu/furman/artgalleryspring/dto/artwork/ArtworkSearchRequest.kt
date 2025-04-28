package edu.furman.artgalleryspring.dto.artwork

// GET parameters bound automatically because every field is nullable.
data class ArtworkSearchRequest(
    var artistName: String? = null,
    var type:       String? = null,
    var medium:     String? = null,
    var style:      String? = null
)
