package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDate

@Entity
@Table(name = "Collector")
data class Collector(
    @Id
    @Column(name = "socialSecurityNumber", columnDefinition = "char(9)", nullable = false)
    val socialSecurityNumber: String,

    @Column(name = "firstName", length = 15, nullable = false)
    val firstName: String,

    @Column(name = "lastName", length = 20, nullable = false)
    val lastName: String,

    @Column(name = "interviewDate")
    val interviewDate: LocalDate? = null,

    @Column(name = "interviewerName", length = 35)
    val interviewerName: String? = null,

    @Column(name = "areaCode", length = 3)
    val areaCode: String? = null,

    @Column(name = "telephoneNumber", length = 7)
    val telephoneNumber: String? = null,

    @Column(name = "street", length = 50)
    val street: String? = null,

    @JoinColumn(name = "zip")
    @OneToOne(cascade = [CascadeType.ALL])
    val zip: Zip? = null,

    @Column(name = "salesLastYear", precision = 8, scale = 2)
    val salesLastYear: BigDecimal? = null,

    @Column(name = "salesYearToDate", precision = 8, scale = 2)
    val salesYearToDate: BigDecimal? = null,

    @JoinColumn(name = "collectionArtistId")
    @OneToOne(cascade = [CascadeType.ALL])
    val collectionArtistId: Artist? = null,

    @Column(name = "collectionMedium", length = 15)
    val collectionMedium: String? = null,

    @Column(name = "collectionStyle", length = 15)
    val collectionStyle: String? = null,

    @Column(name = "collectionType", length = 20)
    val collectionType: String? = null
)