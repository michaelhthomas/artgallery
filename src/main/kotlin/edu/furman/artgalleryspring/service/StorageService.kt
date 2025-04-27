package edu.furman.artgalleryspring.service

import edu.furman.artgalleryspring.entity.Asset
import edu.furman.artgalleryspring.repository.AssetRepository
import org.springframework.core.io.Resource
import org.springframework.core.io.UrlResource
import org.springframework.stereotype.Service
import org.springframework.util.StringUtils
import org.springframework.web.multipart.MultipartFile
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.nio.file.StandardCopyOption
import java.util.UUID
import org.springframework.beans.factory.annotation.Value
import jakarta.annotation.PostConstruct

open class StorageException : RuntimeException {
    constructor(message: String) : super(message)
    constructor(message: String, cause: Throwable) : super(message, cause)
}

class StorageFileNotFoundException : StorageException {
    constructor(message: String) : super(message)
    constructor(message: String, cause: Throwable) : super(message, cause)
}

@Service
class StorageService(
    private val assetRepository: AssetRepository,

    @Value("\${app.upload.dir:uploads}")
    private val uploadDir: String
) {
    private lateinit var rootLocation: Path

    @PostConstruct
    fun init() {
        rootLocation = Paths.get(uploadDir)
        try {
            Files.createDirectories(rootLocation)
        } catch (e: IOException) {
            throw StorageException("Could not initialize storage", e)
        }
    }

    fun store(file: MultipartFile): Asset {
        try {
            if (file.isEmpty) {
                throw StorageException("Failed to store empty file")
            }

            val filename = StringUtils.cleanPath(file.originalFilename ?: "unknown")

            if (filename.contains("..")) {
                throw StorageException("Cannot store file with relative path outside current directory $filename")
            }

            val asset = Asset(
                filename = filename,
                contentType = file.contentType ?: "application/octet-stream",
                size = file.size
            )

            // Save metadata to database first
            assetRepository.save(asset)

            // Use the UUID as the filename to avoid collisions
            val destinationFile = rootLocation.resolve(
                Paths.get(asset.id.toString())
            ).normalize().toAbsolutePath()

            // Ensure the destination is within the storage directory
            if (!destinationFile.parent.equals(rootLocation.toAbsolutePath())) {
                throw StorageException("Cannot store file outside current directory")
            }

            // Save the file
            file.inputStream.use { inputStream ->
                Files.copy(inputStream, destinationFile, StandardCopyOption.REPLACE_EXISTING)
            }

            return asset
        } catch (e: IOException) {
            throw StorageException("Failed to store file", e)
        }
    }

    fun loadAsResource(id: UUID): Pair<Asset, Resource> {
        try {
            val asset = assetRepository.findById(id)
                .orElseThrow { StorageFileNotFoundException("File not found with id: $id") }

            val file = rootLocation.resolve(id.toString())
            val resource = UrlResource(file.toUri())

            if (resource.exists() || resource.isReadable) {
                return Pair(asset, resource)
            } else {
                throw StorageFileNotFoundException("Could not read file with id: $id")
            }
        } catch (e: Exception) {
            throw StorageFileNotFoundException("Could not read file with id: $id", e)
        }
    }

    fun deleteAsset(id: UUID) {
        val asset = assetRepository.findById(id)
            .orElseThrow { StorageFileNotFoundException("File not found with id: $id") }

        val file = rootLocation.resolve(id.toString())
        try {
            Files.deleteIfExists(file)
            assetRepository.delete(asset)
        } catch (e: IOException) {
            throw StorageException("Failed to delete file", e)
        }
    }
}
