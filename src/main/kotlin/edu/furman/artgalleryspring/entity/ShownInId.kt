package edu.furman.artgalleryspring.entity

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import org.hibernate.Hibernate
import org.hibernate.annotations.ColumnDefault
import java.io.Serializable
import java.util.*

@Embeddable
class ShownInId : Serializable {
    @NotNull
    @ColumnDefault("0")
    @Column(name = "artworkId", nullable = false)
    var artworkId: Int? = null

    @Size(max = 50)
    @NotNull
    @ColumnDefault("''")
    @Column(name = "showTitle", nullable = false, length = 50)
    var showTitle: String? = null
    override fun hashCode(): Int = Objects.hash(artworkId, showTitle)
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false

        other as ShownInId

        return artworkId == other.artworkId &&
                showTitle == other.showTitle
    }

    companion object {
        @Suppress("unused")
        private const val serialVersionUID = 0L
    }
}