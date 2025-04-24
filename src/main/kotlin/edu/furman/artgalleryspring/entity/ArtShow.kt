package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.Size
import org.hibernate.annotations.ColumnDefault
import java.time.LocalDate

@Entity
data class ArtShow (
    @Id
    @Size(max = 50)
    @ColumnDefault("''")
    @Column(name = "showTitle", nullable = false, length = 50) var showTitle: String? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "showFeaturedArtistId") var showFeaturedArtist: Artist? = null,

    @Column(name = "showClosingDate") var showClosingDate: LocalDate? = null,

    @Size(max = 50)
    @Column(name = "showTheme", length = 50) var showTheme: String? = null,

    @Column(name = "showOpeningDate") var showOpeningDate: LocalDate? = null
)