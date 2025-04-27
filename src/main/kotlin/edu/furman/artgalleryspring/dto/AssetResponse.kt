package edu.furman.artgalleryspring.dto

import java.time.LocalDateTime
import java.util.UUID

data class AssetResponse(
    val id: UUID,
    val filename: String,
    val contentType: String,
    val size: Long,
    val downloadUrl: String,
    val createdAt: LocalDateTime
)