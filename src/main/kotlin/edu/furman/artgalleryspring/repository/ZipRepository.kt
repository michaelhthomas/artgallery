package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Zip
import org.springframework.data.jpa.repository.JpaRepository

interface ZipRepository : JpaRepository<Zip, String>
