package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import org.hibernate.annotations.ColumnDefault
import java.math.BigDecimal
import java.time.LocalDate

@Entity
data class Sale (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ColumnDefault("0")
    @Column(name = "invoiceNumber", nullable = false)
	val id: Int? = null,

    @NotNull
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "artworkId", nullable = false)
	var artwork: Artwork? = null,

    @ColumnDefault("0.00")
    @Column(name = "amountRemittedToOwner", precision = 8, scale = 2)
	var amountRemittedToOwner: BigDecimal? = null,

    @Column(name = "saleDate")
	var saleDate: LocalDate? = null,

    @Column(name = "salePrice", precision = 8, scale = 2)
	var salePrice: BigDecimal? = null,

    @Column(name = "saleTax", precision = 6, scale = 2)
	var saleTax: BigDecimal? = null,

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "buyerId", nullable = false)
	var buyer: Buyer,

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "salespersonSSN", nullable = false)
    var salesperson: Salesperson,
)