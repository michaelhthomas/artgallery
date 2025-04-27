package edu.furman.artgalleryspring.entity

import edu.furman.artgalleryspring.entity.Collector.Companion.SUM_COLLECTOR_SALES
import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import org.hibernate.annotations.Formula
import java.math.BigDecimal

@Entity
data class Buyer (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "buyerId", nullable = false)
	var id: Int? = null,

    @Size(max = 15)
    @NotNull
    @Column(name = "firstName", nullable = false, length = 15)
	var firstName: String? = null,

    @Size(max = 20)
    @NotNull
    @Column(name = "lastName", nullable = false, length = 20)
	var lastName: String? = null,

    @Size(max = 50)
    @Column(name = "street", length = 50)
	var street: String? = null,

    @ManyToOne(fetch = FetchType.LAZY, cascade = [CascadeType.ALL])
    @JoinColumn(name = "zip")
	var zip: Zip? = null,

    @Size(max = 3)
    @Column(name = "areaCode", length = 3)
	var areaCode: String? = null,

    @Size(max = 7)
    @Column(name = "telephoneNumber", length = 7)
	var telephoneNumber: String? = null,


    @Formula("($SUM_BUYER_SALES AND YEAR(s.saleDate) = YEAR(CURDATE()) - 1)")
    val purchasesLastYear: BigDecimal = BigDecimal.ZERO,

    @Formula("($SUM_BUYER_SALES AND YEAR(s.saleDate) = YEAR(CURDATE()))")
    val purchasesYearToDate: BigDecimal = BigDecimal.ZERO,
) {
    companion object {
        const val SUM_BUYER_SALES =
            "SELECT COALESCE(SUM(s.salePrice), 0) FROM Sale AS s, Artwork as w " +
                    "WHERE s.artworkId = w.artworkId " +
                    "AND s.buyerId = buyerId"
    }
}