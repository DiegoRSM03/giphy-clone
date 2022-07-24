import { db } from "/database"

const handler = async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "You don't have access to this endpoint in production" })
  }

  await db.connect()

  await db.disconnect()

  res.status(200).json()
}

export default handler