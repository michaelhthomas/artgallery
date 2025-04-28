package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.salesperson.SalespersonResponse
import edu.furman.artgalleryspring.repository.SalespersonRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/salesperson")
class SalespersonController(private val salespersonRepository: SalespersonRepository) {
    @GetMapping
    fun listSalespeople() = salespersonRepository.findAll()
        .map { SalespersonResponse.from(it) }
}