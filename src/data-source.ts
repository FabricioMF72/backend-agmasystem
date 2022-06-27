import "reflect-metadata"
import { DataSource } from "typeorm"
import { Client } from "./entity/Client"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "agamadev.database.windows.net",
    port: 1433,
    username: "AdminAgma@agamadev.database.windows.net",
    password: "#6X4VjF&qAr",
    database: "agmadevdb",
    options: {
        encrypt: true,
    },
    entities: [Client],
    migrations: [],
    subscribers: [],
})
