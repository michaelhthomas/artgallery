package edu.furman.artgalleryspring.repository

import edu.furman.artgalleryspring.entity.PotentialCustomer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PotentialCustomerRepository : JpaRepository<PotentialCustomer, Int>