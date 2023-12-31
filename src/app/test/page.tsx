import { db } from "~/server/db";

async function get_data() {
    const meteoriti = await db.meteoriti.findMany({})
    return meteoriti;
}

export default async function Test() {
    const data = await get_data()
    return <p>M: {data.toString()}</p>
}