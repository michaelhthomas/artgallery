package edu.furman.artgalleryspring.entity

import jakarta.persistence.*

@Entity
@Table(name = "Zips")
data class Zip(
    @Id
    @Column(name = "zip", nullable = false, columnDefinition = "char(5)")
    val zip: String,

    @Column(name = "city", nullable = false, length = 15)
    val city: String,

    @Column(name = "state", nullable = false, length = 2)
    val state: String
)
