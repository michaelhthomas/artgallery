package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.ArtShow
import org.springframework.data.jpa.repository.JpaRepository

interface ShowRepository : JpaRepository<ArtShow, String>