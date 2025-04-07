package edu.furman.artgalleryspring.service

import edu.furman.artgalleryspring.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) : UserDetailsService {

    override fun loadUserByUsername(username: String): UserDetails {
        return userRepository.findByUsername(username)
            ?: throw UsernameNotFoundException("User not found with username: $username")
    }
}