package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.AssetResponse
import edu.furman.artgalleryspring.service.StorageFileNotFoundException
import edu.furman.artgalleryspring.service.StorageService
import jakarta.annotation.security.PermitAll
import org.springframework.core.io.Resource
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import java.util.UUID

@RestController
class AssetController(private val storageService: StorageService) {
    @GetMapping("/api/assets/{id}")
    fun getAssetInfo(@PathVariable id: UUID): AssetResponse {
        val asset = storageService.getAssetInfo(id)
        return AssetResponse.from(asset)
    }

    @PostMapping("/api/assets", consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
    fun uploadAsset(@RequestPart("file") file: MultipartFile): AssetResponse {
        val asset = storageService.store(file)

        return AssetResponse.from(asset)
    }

    @GetMapping("/api/public/assets/{id}")
    fun downloadAsset(@PathVariable id: UUID): ResponseEntity<Resource> {
        val (asset, resource) = storageService.loadAsResource(id)

        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(asset.contentType))
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"${asset.filename}\"")
            .body(resource)
    }

    @DeleteMapping("/api/assets/{id}")
    fun deleteAsset(@PathVariable id: UUID): ResponseEntity<Void> {
        storageService.deleteAsset(id)
        return ResponseEntity.noContent().build()
    }

    @ExceptionHandler(StorageFileNotFoundException::class)
    fun handleStorageFileNotFound(exc: StorageFileNotFoundException): ResponseEntity<*> {
        return ResponseEntity.notFound().build<Any>()
    }
}
