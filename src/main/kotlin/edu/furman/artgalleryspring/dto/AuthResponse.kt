package edu.furman.artgalleryspring.dto

import io.swagger.v3.oas.annotations.media.Schema

data class AuthResponse(
    @field:Schema(description = "JWT Authorization Token", example = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ.3Thp81rDFrKXr3WrY1MyMnNK8kKoZBX9lg-JwFznR-M")
    val token: String,
    @field:Schema(description = "Username", example = "admin")
    val username: String
)
