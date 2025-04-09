package edu.furman.artgalleryspring.config

import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.PathItem
import io.swagger.v3.oas.models.Paths
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.security.SecurityRequirement
import io.swagger.v3.oas.models.security.SecurityScheme
import org.springdoc.core.customizers.OpenApiCustomizer
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class OpenApiConfig {

    private val securitySchemeName = "bearerAuth"

    @Bean
    fun openAPI(): OpenAPI {
        return OpenAPI()
            .info(
                Info()
                    .title("My API")
                    .version("1.0.0")
                    .description("API Documentation with JWT Authentication")
            )
            .components(
                Components()
                    .addSecuritySchemes(securitySchemeName,
                        SecurityScheme()
                            .name(securitySchemeName)
                            .type(SecurityScheme.Type.HTTP)
                            .scheme("bearer")
                            .bearerFormat("JWT")
                            .description("Enter JWT token in the format: Bearer {token}")
                    )
            )
    }

    @Bean
    fun pathSecurityCustomizer(): OpenApiCustomizer {
        return OpenApiCustomizer { openApi ->
            // Get all paths from the OpenAPI definition
            val paths = openApi.paths ?: Paths()

            // Define security requirement
            val securityRequirement = SecurityRequirement().addList(securitySchemeName)

            // Apply security to specific paths
            paths.forEach { (path, pathItem) ->
                // Apply security to all /api/** paths except /api/public/**
                if (path.startsWith("/api/") && !path.startsWith("/api/public/") && !path.startsWith("/api/auth/")) {
                    applySecurityToOperations(pathItem, securityRequirement)
                }
            }
        }
    }

    private fun applySecurityToOperations(pathItem: PathItem, securityRequirement: SecurityRequirement) {
        // Apply security to all operations in this path
        pathItem.readOperations().forEach { operation ->
            // Only add security if it's not already defined at the operation level
            if (operation.security == null || operation.security.isEmpty()) {
                operation.addSecurityItem(securityRequirement)
            }
        }
    }
}