package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.PotentialCustomer
import org.springframework.data.jpa.repository.JpaRepository

interface PotentialCustomerRepository : JpaRepository<PotentialCustomer, Int>