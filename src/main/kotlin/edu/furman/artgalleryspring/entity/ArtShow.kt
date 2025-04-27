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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "showFeaturedArtistId")
	var showFeaturedArtist: Artist? = null,

    @Size(max = 50)
    @Column(name = "showTheme", length = 50)
	var showTheme: String? = null,

    @Column(name = "showOpeningDate")
	var showOpeningDate: LocalDate? = null,

    @Column(name = "showClosingDate")
    var showClosingDate: LocalDate? = null,
) {
    @ManyToMany(mappedBy = "shownIn", fetch = FetchType.LAZY)
    val artworks: MutableSet<Artwork> = mutableSetOf()
}