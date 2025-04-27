package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Zip
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ZipRepository : JpaRepository<Zip, String>
