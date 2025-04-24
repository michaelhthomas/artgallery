package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import java.time.LocalDate

@Entity
data class PotentialCustomer (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "potentialCustomerId", nullable = false) var id: Int? = null,

    @Size(max = 15)
    @NotNull
    @Column(name = "firstname", nullable = false, length = 15) var firstname: String? = null,

    @Size(max = 20)
    @NotNull
    @Column(name = "lastName", nullable = false, length = 20) var lastName: String? = null,

    @Size(max = 3)
    @Column(name = "areaCode", length = 3) var areaCode: String? = null,

    @Size(max = 7)
    @Column(name = "telephoneNumber", length = 7) var telephoneNumber: String? = null,

    @Size(max = 50)
    @Column(name = "street", length = 50) var street: String? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zip") var zip: Zip? = null,

    @Column(name = "dateFilledIn") var dateFilledIn: LocalDate? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "preferredArtistId") var preferredArtist: Artist? = null,

    @Size(max = 15)
    @Column(name = "preferredMedium", length = 15) var preferredMedium: String? = null,

    @Size(max = 15)
    @Column(name = "preferredStyle", length = 15) var preferredStyle: String? = null,

    @Size(max = 20)
    @Column(name = "preferredType", length = 20) var preferredType: String? = null
)