package edu.furman.artgalleryspring.dto.collector

import edu.furman.artgalleryspring.entity.Collector
import java.math.BigDecimal

data class CollectorResponse (
    val id: String,
    val firstName: String,
    val lastName: String,
    val areaCode: String?,
    val telephoneNumber: String?,
    val address: String?,
    val salesLastYear: BigDecimal,
    val salesYearToDate: BigDecimal,
    val collectionMedium: String?,
    val collectionStyle: String?,
    val collectionType: String?
) {
    companion object {
        fun from(collector: Collector) = CollectorResponse(
            id = collector.socialSecurityNumber,
            firstName = collector.firstName,
            lastName = collector.lastName,
            areaCode = collector.areaCode,
            telephoneNumber = collector.telephoneNumber,
            address = if (collector.street != null && collector.zip != null)
                "${collector.street}, ${collector.zip!!.city}, ${collector.zip!!.state} ${collector.zip!!.zip}"
            else null,
            salesLastYear = collector.salesLastYear,
            salesYearToDate = collector.salesYearToDate,
            collectionMedium = collector.collectionMedium,
            collectionStyle = collector.collectionStyle,
            collectionType = collector.collectionType
        )
    }
}
