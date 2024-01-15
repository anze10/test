import { db } from "~/server/db"

async function main() {
    await db.meteoriti.deleteMany({})
}

await main()