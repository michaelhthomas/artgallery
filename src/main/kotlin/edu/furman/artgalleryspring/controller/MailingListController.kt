package edu.furman.artgalleryspring.controller

import edu.furman.artgalleryspring.dto.potentialcustomer.MailingListSignupRequest
import edu.furman.artgalleryspring.entity.PotentialCustomer
import edu.furman.artgalleryspring.entity.Zip
import edu.furman.artgalleryspring.repository.ArtistRepository
import edu.furman.artgalleryspring.repository.PotentialCustomerRepository
import edu.furman.artgalleryspring.repository.ZipRepository
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import jakarta.annotation.security.PermitAll
import jakarta.validation.Valid
import org.springframework.beans.propertyeditors.StringTrimmerEditor
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.WebDataBinder
import org.springframework.web.bind.annotation.*
import java.time.LocalDate


@RestController
@RequestMapping("/api/mailing-list")
@Tag(name = "Mailing List", description = "Mailing list signup API")
class MailingListController(
    private val potentialCustomerRepository: PotentialCustomerRepository,
    private val zipRepository: ZipRepository,
    private val artistRepository: ArtistRepository,
) {

    @InitBinder
    fun initBinder(binder: WebDataBinder) {
        binder.registerCustomEditor(String::class.java, StringTrimmerEditor(true))
    }

    @PermitAll
    @Operation(summary = "Sign up for mailing list", description = "Add a new potential customer to the mailing list")
    @PostMapping("/signup")
    fun signupForMailingList(@RequestBody @Valid request: MailingListSignupRequest): ResponseEntity<String> {
        // Clean phone number fields by removing non-numeric characters
        request.areaCode = request.areaCode?.replace(Regex("[^0-9]"), "")
        request.telephoneNumber = request.telephoneNumber?.replace(Regex("[^0-9]"), "")

        // Find or create zip record
        val zip = if (request.zipCode != null && request.city != null && request.state != null) {
            zipRepository.findById(request.zipCode).orElseGet {
                val newZip = Zip(
                    zip = request.zipCode,
                    city = request.city,
                    state = request.state
                )
                zipRepository.save(newZip)
            }
        } else null

        // Find artist if artist name is provided
        val artist = request.preferredArtistFirstName?.let { firstName ->
            request.preferredArtistLastName?.let { lastName ->
                artistRepository.findByFirstNameAndLastName(firstName, lastName).orElse(null)
            }
        }

        // Create potential customer entity
        val potentialCustomer = PotentialCustomer(
            firstname = request.firstName,
            lastName = request.lastName,
            areaCode = request.areaCode,
            telephoneNumber = request.telephoneNumber,
            street = request.street,
            zip = zip,
            dateFilledIn = LocalDate.now(),
            preferredArtist = artist,
            preferredMedium = request.preferredMedium,
            preferredStyle = request.preferredStyle,
            preferredType = request.preferredType
        )

        // Save to database
        potentialCustomerRepository.save(potentialCustomer)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }
}