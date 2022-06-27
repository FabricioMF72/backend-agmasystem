import { AppDataSource } from "./data-source"
import { Client } from "./entity/Client"

AppDataSource.initialize().then(async () => {

  console.log("Inserting a new user into the database...")
  const client = new Client()
  client.FirstName = "Timber"
  client.LastName = "Saw"
  await AppDataSource.manager.save(client)
  console.log("Saved a new user with id: " + client.ClientID)

  console.log("Loading users from the database...")
  const clients = await AppDataSource.manager.find(Client)
  console.log("Loaded users: ", clients)

  console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

/*var ISOLATION_LEVEL = require('tedious').ISOLATION_LEVEL;
const { Connection } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "AdminAgma", // update me
      password: "#6X4VjF&qAr" // update me
    },
    type: "default"
  },
  server: "tcp:agamadev.database.windows.net", // update me
  options: {
    database: "agmadevdb", //update me
    encrypt: true,
    enableArithAbort: true,
    connectionIsolationLevel: ISOLATION_LEVEL.READ_UNCOMMITTED
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", (err: { message: any; }) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("CONNECTED SUCCECSS");
  }
});

connection.connect();*/