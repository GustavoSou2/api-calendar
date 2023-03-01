import cors from 'cors'

class CorsConfig {
    constructor() {}

    handler(allowedOrigins: string[]) {
        const options = this.configCorsOptions(allowedOrigins)

        return cors(options)
    }

    configCorsOptions(allowedOrigins: string[]): cors.CorsOptions {
        return <cors.CorsOptions> {
            origin: allowedOrigins
        };
    }
}

export default new CorsConfig()