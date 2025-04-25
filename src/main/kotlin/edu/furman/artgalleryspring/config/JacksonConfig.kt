package edu.furman.artgalleryspring.config

import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.deser.std.StringDeserializer
import com.fasterxml.jackson.databind.module.SimpleModule
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.io.IOException

@Configuration
class JacksonConfig {
    /**
     * Configures module with a [StringDeserializer] that will trim all [String] fields in the request body and set them to null
     * if they are empty.
     *
     *
     * This enables validations like `@`[Email] to work properly if the user sends an empty/blank string,
     * and helps avoid complex SQL queries to check for empty strings whenever checking for nulls.
     *
     * @return a [SimpleModule] bean that will be registered to the global [ObjectMapper]
     */
    @Bean
    fun stringDeserializerModule(): SimpleModule {
        val module = SimpleModule()

        module.addDeserializer(String::class.java, object : StringDeserializer() {
            @Throws(IOException::class)
            override fun deserialize(p: JsonParser?, ctx: DeserializationContext?): String? {
                val value = super.deserialize(p, ctx) ?: return null

                val trimmed = value.trim { it <= ' ' }
                if (trimmed.isEmpty()) {
                    return null
                }

                return trimmed
            }
        })

        return module
    }
}