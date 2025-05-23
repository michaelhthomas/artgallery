package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import org.apache.commons.lang3.builder.HashCodeExclude
import java.math.BigDecimal
import java.time.LocalDate

@Entity
data class Artwork (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artworkId", nullable = false)
	var id: Int? = null,

    @NotNull
    @ManyToOne(optional = false)
    @JoinColumn(name = "artistId", nullable = false)
	var artist: Artist,

    @OneToOne(fetch = FetchType.LAZY, optional = true)
    var workImage: Asset? = null,

    @Size(max = 50)
    @NotNull
    @Column(name = "workTitle", nullable = false, length = 50)
	var workTitle: String,

    @Column(name = "askingPrice", precision = 8, scale = 2)
	var askingPrice: BigDecimal? = null,

    @Column(name = "dateListed")
	var dateListed: LocalDate? = null,

    @Column(name = "dateReturned")
	var dateReturned: LocalDate? = null,

    @Column(name = "dateShown")
	var dateShown: LocalDate? = null,

    @Size(max = 15)
    @Column(name = "status", length = 15)
	var status: String? = null,

    @Size(max = 15)
    @Column(name = "workMedium", length = 15)
	var workMedium: String? = null,

    @Size(max = 15)
    @Column(name = "workSize", length = 15)
	var workSize: String? = null,

    @Size(max = 15)
    @Column(name = "workStyle", length = 15)
	var workStyle: String? = null,

    @Size(max = 20)
    @Column(name = "workType", length = 20)
	var workType: String? = null,

    @Size(max = 4)
    @Column(name = "workYearCompleted", length = 4)
	var workYearCompleted: String? = null,

    @ManyToOne
    @JoinColumn(name = "collectorSocialSecurityNumber")
	var collector: Collector? = null,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "ShownIn",
        joinColumns = [JoinColumn(name = "artworkId")],
        inverseJoinColumns = [JoinColumn(name = "showTitle")])
    var shownIn: MutableSet<ArtShow> = mutableSetOf(),
) {
    @OneToOne(mappedBy = "artwork", cascade = [CascadeType.ALL])
    val sale: Sale? = null
}