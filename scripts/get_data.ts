import { db } from "~/server/db";

const main = async () => {
    const meteoriti = await db.meteoriti.findMany({})
    console.log("meteoriti", meteoriti)
}

await main()