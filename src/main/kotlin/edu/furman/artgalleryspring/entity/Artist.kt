package edu.furman.artgalleryspring.entity

import java.math.BigDecimal
import java.time.LocalDate
import jakarta.persistence.*
import org.hibernate.annotations.Formula

@Entity
@Table(name = "Artist")
data class Artist(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ArtistId")
    var artistId: Int? = null,

    @Column(name = "firstName", nullable = false, length = 15)
    val firstName: String,

    @Column(name = "lastName", nullable = false, length = 20)
    val lastName: String,

    @Column(name = "interviewDate")
    val interviewDate: LocalDate? = null,

    @Column(name = "interviewerName", length = 35)
    val interviewerName: String? = null,

    @Column(name = "areaCode", columnDefinition = "char(3)")
    val areaCode: String? = null,

    @Column(name = "telephoneNumber", columnDefinition = "char(7)")
    val telephoneNumber: String? = null,

    @Column(name = "street", length = 50)
    val street: String? = null,

    @JoinColumn(name = "zip")
    @OneToOne(cascade = [CascadeType.ALL])
    val zip: Zip? = null,

    @Formula("($SUM_ARTIST_SALES AND YEAR(s.saleDate) = YEAR(CURDATE()) - 1)")
    val salesLastYear: BigDecimal? = null,

    @Formula("($SUM_ARTIST_SALES AND YEAR(s.saleDate) = YEAR(CURDATE()))")
    val salesYearToDate: BigDecimal? = null,

    @Column(name = "socialSecurityNumber", columnDefinition = "char(9)")
    val socialSecurityNumber: String? = null,

    @Column(name = "usualMedium", length = 15)
    val usualMedium: String? = null,

    @Column(name = "usualStyle", length = 15)
    val usualStyle: String? = null,

    @Column(name = "usualType", length = 20)
    val usualType: String? = null
) {
    companion object {
        const val SUM_ARTIST_SALES =
            "SELECT COALESCE(SUM(s.salePrice), 0) FROM Sale AS s, Artwork as w " +
            "WHERE s.artworkId = w.artworkId AND w.artistId = artistId"
    }
}
