package edu.furman.artgalleryspring.dto

import edu.furman.artgalleryspring.entity.Asset
import java.time.LocalDateTime
import java.util.UUID

data class AssetResponse(
    val id: UUID,
    val filename: String,
    val contentType: String,
    val size: Long,
    val downloadUrl: String,
    val createdAt: LocalDateTime
) {
    companion object {
        fun from(asset: Asset) = AssetResponse(
            id = asset.id,
            filename = asset.filename,
            contentType = asset.contentType,
            size = asset.size,
            downloadUrl = asset.getDownloadUri(),
            createdAt = asset.createdAt
        )
    }
}