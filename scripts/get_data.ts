import { db } from "~/server/db";

const main = async () => {
    const meteorit = await db.meteorit.findMany({})
    console.log("meteoriti", meteorit)
}

await main()