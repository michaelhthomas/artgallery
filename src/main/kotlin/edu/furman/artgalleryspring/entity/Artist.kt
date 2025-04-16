package edu.furman.artgalleryspring.entity

import java.math.BigDecimal
import java.time.LocalDate
import jakarta.persistence.*

@Entity
@Table(name = "Artist")
data class Artist(
    @Id
    @Column(name = "ArtistId")
    val artistId: Int,

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

    @OneToOne
    val zip: Zip? = null,

    @Column(name = "salesLastYear", precision = 8, scale = 2)
    val salesLastYear: BigDecimal? = null,

    @Column(name = "salesYearToDate", precision = 8, scale = 2)
    val salesYearToDate: BigDecimal? = null,

    @Column(name = "socialSecurityNumber", columnDefinition = "char(9)")
    val socialSecurityNumber: String? = null,

    @Column(name = "usualMedium", length = 15)
    val usualMedium: String? = null,

    @Column(name = "usualStyle", length = 15)
    val usualStyle: String? = null,

    @Column(name = "usualType", length = 20)
    val usualType: String? = null
)
