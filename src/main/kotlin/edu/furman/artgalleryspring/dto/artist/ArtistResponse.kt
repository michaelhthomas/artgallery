package edu.furman.artgalleryspring.dto.artist

import edu.furman.artgalleryspring.entity.Artist
import java.math.BigDecimal

data class ArtistResponse (
    val id: Int,
    val firstName: String,
    val lastName: String,
    val areaCode: String?,
    val telephoneNumber: String?,
    val address: String?,
    val salesLastYear: BigDecimal,
    val salesYearToDate: BigDecimal,
    val usualMedium: String?,
    val usualStyle: String?,
    val usualType: String?
) {
    companion object {
        fun from(artist: Artist) = ArtistResponse(
            id = artist.artistId!!,
            firstName = artist.firstName,
            lastName = artist.lastName,
            areaCode = artist.areaCode,
            telephoneNumber = artist.telephoneNumber,
            address = if (artist.street != null && artist.zip != null)
                "${artist.street}, ${artist.zip!!.city}, ${artist.zip!!.state} ${artist.zip!!.zip}"
            else null,
            salesLastYear = artist.salesLastYear,
            salesYearToDate = artist.salesYearToDate,
            usualMedium = artist.usualMedium,
            usualStyle = artist.usualStyle,
            usualType = artist.usualType
        )
    }
}