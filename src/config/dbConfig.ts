import {readFile} from '../utils/readFile'
import config from 'config'
//import {buildBehavioral} from '../utils/loggerFactory'

//const logger = buildBehavioral('dbConfig.ts');

const dbConfig:any = config.get('databaseConfig');
//logger.info(dbConfig);

const db_username: string = readFile(dbConfig.username);
const db_password: string = readFile(dbConfig.password);
const db_name: string = readFile(dbConfig.database);
const db_host: string = readFile(dbConfig.host);
const pool_max: number = Number(config.get('pool_max'));
const db_timezone: string = config.get('timezone');

export const dbConfigObject = {
database: db_name,
username: db_username,
password: db_password,
host: db_host,
pool_max,
db_timezone,
}