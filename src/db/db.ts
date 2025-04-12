
/*
    Implementar
*/ 

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://test:<db_password>@test.6lexbno.mongodb.net/?retryWrites=true&w=majority&appName=test";

// Crear una instancia de MongoClient con las opciones adecuadas
const client: MongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(): Promise<void> {
  try {
    // Conexión al servidor (opcional desde MongoDB v4.7)
    await client.connect();

    // Comando de ping para verificar la conexión
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Cerrar conexión al finalizar
    await client.close();
  }
}

run().catch(console.dir);