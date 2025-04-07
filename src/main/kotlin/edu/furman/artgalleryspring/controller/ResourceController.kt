package edu.furman.artgalleryspring.controller

import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class ResourceController {

    @GetMapping("/public/resource")
    fun getPublicResource(): ResponseEntity<Map<String, String>> {
        return ResponseEntity.ok(mapOf("message" to "This is a public resource"))
    }

    @GetMapping("/resource")
    fun getProtectedResource(@AuthenticationPrincipal userDetails: UserDetails): ResponseEntity<Map<String, Any>> {
        return ResponseEntity.ok(mapOf(
            "message" to "This is a protected resource",
            "username" to userDetails.username,
            "roles" to userDetails.authorities.map { it.authority }
        ))
    }
}
