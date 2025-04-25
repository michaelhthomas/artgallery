package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Artwork
import org.springframework.data.jpa.repository.JpaRepository

interface ArtworkRepository : JpaRepository<Artwork, Int>
