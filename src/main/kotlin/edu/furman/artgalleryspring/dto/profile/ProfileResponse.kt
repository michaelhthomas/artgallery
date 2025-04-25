package edu.furman.artgalleryspring.dto.profile

import edu.furman.artgalleryspring.annotations.NoArg

@NoArg
data class ProfileResponse (
    var firstName: String,
    var lastName: String,
    var email: String,
    var avatarUrl: String,
)
