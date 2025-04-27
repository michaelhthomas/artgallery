package edu.furman.artgalleryspring.dto.show

import edu.furman.artgalleryspring.entity.ArtShow
import java.time.LocalDate

data class ShowResponse(
    val title: String,
    val featuredArtistName: String?,
    val theme: String?,
    val openingDate: LocalDate?,
    val closingDate: LocalDate?,
) {
    companion object {
        fun from(s: ArtShow) = ShowResponse(
            title = s.showTitle,
            featuredArtistName = s.showFeaturedArtist?.let {
                "${it.firstName} ${it.lastName}"
            },
            theme = s.showTheme,
            openingDate = s.showOpeningDate,
            closingDate = s.showClosingDate
        )
    }
}
