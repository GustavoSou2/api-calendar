import express, { Application }  from "express";
import routes from "./routes/index.routing";
import CorsConfig from "./config/cors.config";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

class App {
    app!: express.Application;
    
    constructor(app: Application) {
        this.routesInit(app);
        this.corsInit(app)
        app.use(bodyParser.urlencoded({extended : true}));
        app.use(bodyParser.json());     
        dotenv.config()
        this.app = app;
    }

    routesInit(app: express.Application) {
        app.use(routes)
    }

    corsInit(app: express.Application): void {
        const corsRequester = CorsConfig.handler(['*'])
    
        app.use(corsRequester)
        app.use(express.json())
    }
}

export default new App(express()).app