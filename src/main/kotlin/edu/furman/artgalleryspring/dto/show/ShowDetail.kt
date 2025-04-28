package edu.furman.artgalleryspring.dto.show

import edu.furman.artgalleryspring.dto.artwork.ArtworkResponse
import edu.furman.artgalleryspring.entity.ArtShow

data class ShowDetail(
    val show: ShowResponse,
    val artworks: List<ArtworkResponse>,
) {
    companion object {
        fun from(show: ArtShow) = ShowDetail(
            show = ShowResponse.from(show),
            artworks = show.artworks.map { ArtworkResponse.from(it) }
        )
    }
}
