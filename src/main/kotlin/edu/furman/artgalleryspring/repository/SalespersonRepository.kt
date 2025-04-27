package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.Salesperson
import org.springframework.data.jpa.repository.JpaRepository

interface SalespersonRepository : JpaRepository<Salesperson, String>
