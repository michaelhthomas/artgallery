package edu.furman.artgalleryspring.entity

import java.time.LocalDateTime
import java.util.UUID
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import org.hibernate.annotations.CreationTimestamp
import org.springframework.web.servlet.support.ServletUriComponentsBuilder

@Entity
@Table(name = "assets")
data class Asset(
    @Id
    val id: UUID = UUID.randomUUID(),

    val filename: String,

    val contentType: String,

    val size: Long,

    @CreationTimestamp
    val createdAt: LocalDateTime = LocalDateTime.now()
) {

    fun getDownloadUri() =
        ServletUriComponentsBuilder.fromCurrentContextPath()
            .path("/api/public/assets/")
            .path(id.toString())
            .toUriString()
}