package edu.furman.artgalleryspring.exception

class CustomValidationException(val errors: Map<String, List<String>>, message: String) : RuntimeException(message) {
    class Builder {
        private val errors: MutableMap<String, MutableList<String>> = mutableMapOf()

        /**
         * Add a single error message for a field
         */
        fun addError(field: String, message: String): Builder {
            errors.getOrPut(field) { mutableListOf() }.add(message)
            return this
        }

        /**
         * Add multiple error messages for a field
         */
        fun addErrors(field: String, messages: List<String>): Builder {
            errors.getOrPut(field) { mutableListOf() }.addAll(messages)
            return this
        }

        /**
         * Add multiple errors at once using a map
         */
        fun addAllErrors(errorsMap: Map<String, List<String>>): Builder {
            errorsMap.forEach { (field, messages) ->
                errors.getOrPut(field) { mutableListOf() }.addAll(messages)
            }
            return this
        }

        /**
         * Check if there are any validation errors
         */
        fun hasErrors(): Boolean = errors.isNotEmpty()

        /**
         * Build and throw the ValidationException if there are errors
         */
        fun throwIfInvalid(customMessage: String = "Validation failed"): Builder {
            if (hasErrors()) {
                throw build(customMessage)
            }
            return this
        }

        /**
         * Build the ValidationException
         */
        fun build(customMessage: String = "Validation failed"): CustomValidationException {
            val message = if (errors.isEmpty()) {
                customMessage
            } else {
                val errorCount = errors.values.sumOf { it.size }
                "$customMessage with $errorCount error(s): ${formatErrors()}"
            }

            return CustomValidationException(errors.mapValues { it.value.toList() }, message)
        }

        private fun formatErrors(): String {
            return errors.entries.joinToString("; ") { (field, messages) ->
                "$field: [${messages.joinToString(", ")}]"
            }
        }
    }

    companion object {
        fun builder(): Builder = Builder()
    }
}