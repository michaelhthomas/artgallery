# Furman Art Gallery

## Setup

The recommended IDE for this project is IntelliJ IDEA, though VS Code and other editors may also work (with the right plugins).

If using IntelliJ IDEA, the "Local Development" run configuration is already set up. To run the project for the first time,

1. Open the project in IntelliJ IDEA.
1. Copy the `src/main/resources/application.local.properties.example` file to `src/main/resources/application.local.properties`
    ```
    cp src/main/resources/application-local.properties.example src/main/resources/application-local.properties
    ```

1. Edit the `src/main/resources/application.local.properties` file
    1. Update the database connection information with your credentials.
    1. Add a randomly generated secret key for JWT token generation. To generate such a key, you can use the following command:
        ```
        openssl rand -base64 64
        ```

1. Click the "Local Development" run configuration.
1. Click the "Run" button.

The above steps will start the backend server in development mode on port `8080`. To run the frontend, open the `frontend` directory (in a terminal or VS Code) and run the following commands:
```sh
pnpm install # install dependencies
pnpm dev # start development server
```

> [!IMPORTANT]
> If you haven't already, make sure to install Node.js and `pnpm` before proceeding. [The standalone pnpm installation script](https://pnpm.io/installation#using-a-standalone-script) should handle installing both.

After starting the frontend development server with `pnpm dev`, you can access the application at http://localhost:5173.
