import { MongoClient } from 'mongodb'

const runtimeConfig = useRuntimeConfig()

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!runtimeConfig.mongodbUri) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the connection
  // is not created multiple times
  if (!global._mongoClientPromise) {
    client = new MongoClient(runtimeConfig.mongodbUri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, create a new connection
  client = new MongoClient(runtimeConfig.mongodbUri)
  clientPromise = client.connect()
}

export async function getDb() {
  const client = await clientPromise
  return client.db(runtimeConfig.mongodbName)
}

export async function closeConnection() {
  if (client) {
    await client.close()
  }
}