package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.Size
import java.time.LocalDate

@Entity
data class ArtShow (
    @Id
    @Size(max = 50)
    @Column(name = "showTitle", nullable = false, length = 50)
	var showTitle: String,

    @ManyToOne
    @JoinColumn(name = "showFeaturedArtistId")
	var showFeaturedArtist: Artist? = null,

    @Size(max = 50)
    @Column(name = "showTheme", length = 50)
	var showTheme: String? = null,

    @Column(name = "showOpeningDate")
	var showOpeningDate: LocalDate,

    @Column(name = "showClosingDate")
    var showClosingDate: LocalDate,
) {
    @ManyToMany(mappedBy = "shownIn", fetch = FetchType.LAZY)
    val artworks: MutableList<Artwork> = mutableListOf()
}