package edu.furman.artgalleryspring.entity

import jakarta.persistence.*
import org.hibernate.annotations.ColumnDefault

@Entity
data class ShownIn (
    @EmbeddedId
	var id: ShownInId? = null,

    @MapsId("artworkId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "artworkId", nullable = false)
	var artwork: Artwork? = null
)