package edu.furman.artgalleryspring.dto.artwork

import edu.furman.artgalleryspring.dto.sale.SaleResponse
import edu.furman.artgalleryspring.dto.show.ShowResponse
import edu.furman.artgalleryspring.entity.Artwork
import java.math.BigDecimal
import java.time.LocalDate

data class ArtworkResponse(
    val id: Int,
    val artistId: Int,
    val artistName: String,
    val ownerName: String,
    val status: String?,
    val workImage: String?,
    val workTitle: String?,
    val workYearCompleted: String?,
    val workMedium: String?,
    val workStyle: String?,
    val workType: String?,
    val workSize: String?,
    val dateListed: LocalDate?,
    val dateShown: LocalDate?,
    val dateSold: LocalDate?,
    val dateReturned: LocalDate?,
    val askingPrice: BigDecimal?,
    val salePrice: BigDecimal?,
) {
    companion object {
        fun from(artwork: Artwork) =
            ArtworkResponse(
                id = artwork.id!!,
                artistId = artwork.artist.artistId!!,
                artistName = "${artwork.artist.firstName} ${artwork.artist.lastName}",
                ownerName = if(artwork.collector != null)
                    "${artwork.collector!!.firstName} ${artwork.collector!!.lastName}"
                    else "${artwork.artist.firstName} ${artwork.artist.lastName}",
                status = artwork.status,
                workImage = artwork.workImage?.getDownloadUri(),
                workTitle = artwork.workTitle,
                workYearCompleted = artwork.workYearCompleted,
                workMedium = artwork.workMedium,
                workStyle = artwork.workStyle,
                workType = artwork.workType,
                workSize = artwork.workSize,
                dateListed = artwork.dateListed,
                dateShown = artwork.dateShown,
                dateSold = artwork.sale?.saleDate,
                dateReturned = artwork.dateReturned,
                askingPrice = artwork.askingPrice,
                salePrice = artwork.sale?.salePrice,
            )
    }
}