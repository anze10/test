import { db } from "~/server/db";

const main = async () => {
    const meteorit = await db.meteoriti.findMany({})
    console.log("meteoriti", meteorit)
}

await main()