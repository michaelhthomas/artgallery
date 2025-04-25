package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import org.hibernate.annotations.ColumnDefault

@Entity
data class Salesperson (
    @Id
    @Size(max = 9)
    @Column(name = "socialSecurityNumber", nullable = false, columnDefinition = "char(9)")
	var socialSecurityNumber: String? = null,

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zip")
	var zip: Zip? = null
)