import org.siouan.frontendgradleplugin.infrastructure.gradle.RunPnpmTaskType

plugins {
    kotlin("jvm") version "1.9.25"
    kotlin("plugin.spring") version "1.9.25"
    kotlin("plugin.noarg") version "2.1.20"
    id("org.springframework.boot") version "3.4.4"
    id("io.spring.dependency-management") version "1.1.7"
    kotlin("plugin.jpa") version "1.9.25"
    id("org.springdoc.openapi-gradle-plugin") version "1.9.0"
    id("org.siouan.frontend-jdk21") version "10.0.0"
}

group = "edu.furman"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

noArg {
    annotation("edu.furman.artgalleryspring.annotations.NoArg")
}

frontend {
    nodeVersion.set("22.14.0")
    packageJsonDirectory.set(file("${layout.projectDirectory}/frontend"))
    assembleScript.set("run build")
    checkScript.set("run check")
}
tasks.register<Copy>("copyFrontendAssets") {
    description = "Copies frontend files to the Spring static resources directory"
    group = "build"

    from(file("${layout.projectDirectory}/frontend/dist"))
    into(file("${layout.buildDirectory.get()}/resources/main/static"))
}
tasks.named("processResources") {
    dependsOn("copyFrontendAssets")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("io.jsonwebtoken:jjwt-api:0.12.3")
    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.6")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.18.2")
    implementation("org.modelmapper:modelmapper:3.1.1")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.12.3")
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.12.3")
    runtimeOnly("org.mariadb.jdbc:mariadb-java-client:2.2.0")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
    testImplementation("org.springframework.security:spring-security-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

kotlin {
    compilerOptions {
        freeCompilerArgs.addAll("-Xjsr305=strict")
    }
}

allOpen {
    annotation("jakarta.persistence.Entity")
    annotation("jakarta.persistence.MappedSuperclass")
    annotation("jakarta.persistence.Embeddable")
}

tasks.withType<Test> {
    useJUnitPlatform()
}

openApi {
    outputDir.set(file("${layout.projectDirectory}/frontend/app/api"))
    customBootRun {
        args.set(listOf("--spring.profiles.active=local"))
    }
}

tasks["compileJava"].finalizedBy("generateOpenApiDocs")
tasks["compileKotlin"].finalizedBy("generateOpenApiDocs")


tasks.register<RunPnpmTaskType>("generateApiClient") {
    args.set("run codegen")
}
tasks["generateOpenApiDocs"].finalizedBy("generateApiClient")
