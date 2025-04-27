package edu.furman.artgalleryspring.dto.artwork

import edu.furman.artgalleryspring.dto.sale.SaleResponse
import edu.furman.artgalleryspring.dto.show.ShowResponse
import edu.furman.artgalleryspring.entity.Artwork
import edu.furman.artgalleryspring.entity.Sale

data class ArtworkListingResponse(
    val work: ArtworkResponse,
    val sale: SaleResponse?,
    val shownIn: List<ShowResponse>,
) {
    companion object {
        fun from(artwork: Artwork, sale: Sale?) = ArtworkListingResponse(
            work = ArtworkResponse.from(artwork),
            sale = sale?.let { SaleResponse.from(it) },
            shownIn = artwork.shownIn.map { ShowResponse.from(it) }
        )
    }
}
