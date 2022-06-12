import config from "config";
//import { dbConfig } from "./models";
import app from "./app"
//import {buildBehavioral} from '../utils/loggerFactory'
//const logger = buildBehavioral('dbConfig.ts');

let port = config.get('port');
if(config.util.getEnv('NODE_ENV') === 'production'){
    port = process.env.PORT;
}

if(!port){
    process.exit(1);
}

const portApp: number = parseInt(port as string, 10)

const server = app.listen(portApp, async () => {
    try {
        //await dbConfig.authenticate();
        //logger.info("Database connected")
    } catch (error) {
        //logger.fatal("Database connection error")
    }
})


