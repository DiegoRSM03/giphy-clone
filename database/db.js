import mongoose from "mongoose"

/*
  0 = disconnected
  1 = connected
  2 = connecting
  3 = disconnecting
*/
let mongoConnectionStatus = 0

export const connect = async () => {
  const server = process.env.MONGO_SERVER
  const dbName = process.env.MONGO_DB_NAME

  if (mongoConnectionStatus) {
    console.log("[SERVER] Already connected!")
    return
  }

  if (mongoose.connections.length > 0) {
    mongoConnectionStatus = mongoose.connections[0].readyState

    if (mongoConnectionStatus === 1) {
      console.log("[SERVER] Using previous connection")
      return
    }

    await mongoose.disconnect()
  }

  await mongoose.connect(`mongodb://${server}/${dbName}`)
  console.log("[SERVER] Connected")

  mongoConnectionStatus = 1
}

export const disconnect = async () => {
  if (mongoConnectionStatus === 0) return

  await mongoose.disconnect()
  console.log("[SERVER] Disconnected")
}