package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Asset
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface AssetRepository : JpaRepository<Asset, UUID>