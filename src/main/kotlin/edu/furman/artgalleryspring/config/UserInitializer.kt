package edu.furman.artgalleryspring.config

import edu.furman.artgalleryspring.entity.User
import edu.furman.artgalleryspring.repository.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.security.crypto.password.PasswordEncoder
import org.slf4j.LoggerFactory

@Configuration
@Profile("local")
class UserInitializer {
    private val logger = LoggerFactory.getLogger(UserInitializer::class.java)

    @Bean
    fun initUsers(userRepository: UserRepository, passwordEncoder: PasswordEncoder): CommandLineRunner {
        return CommandLineRunner {
            // Check if users already exist to avoid duplicates on restart
            if (userRepository.count() == 0L) {
                logger.info("Initializing users in database")

                // Create admin user
                val adminUser = User(
                    username = "admin",
                    password = passwordEncoder.encode("admin123"),
                )
                userRepository.save(adminUser)
                logger.info("Created admin user: ${adminUser.username}")

                // Create regular user
                val regularUser = User(
                    username = "user",
                    password = passwordEncoder.encode("user123"),
                )
                userRepository.save(regularUser)
                logger.info("Created regular user: ${regularUser.username}")

                logger.info("User initialization completed")
            } else {
                logger.info("Users already exist, skipping initialization")
            }
        }
    }
}