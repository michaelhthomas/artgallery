package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import java.math.BigDecimal

@Entity
data class Buyer (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "buyerId", nullable = false) var id: Int? = null,

    @Size(max = 15)
    @NotNull
    @Column(name = "firstName", nullable = false, length = 15) var firstName: String? = null,

    @Size(max = 20)
    @NotNull
    @Column(name = "lastName", nullable = false, length = 20) var lastName: String? = null,

    @Size(max = 50)
    @Column(name = "street", length = 50) var street: String? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zip") var zip: Zip? = null,

    @Size(max = 3)
    @Column(name = "areaCode", length = 3) var areaCode: String? = null,

    @Size(max = 7)
    @Column(name = "telephoneNumber", length = 7) var telephoneNumber: String? = null,

    @Column(name = "purchasesLastYear", precision = 8, scale = 2) var purchasesLastYear: BigDecimal? = null,

    @Column(name = "purchasesYearToDate", precision = 8, scale = 2) var purchasesYearToDate: BigDecimal? = null
    )