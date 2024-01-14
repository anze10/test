import { randomFill } from "crypto";
import { db } from "~/server/db"
function randomFromInterval(min: number, max: number) { // min and max included 
    return Math.random() * (max - min + 1) + min
}
function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
async function main() {
    for (let i = 0; i < 1000; i++) {
        await db.meteoriti.create({
            data: {
                cas: randomDate(new Date(2015, 1, 1), new Date()),
                trajanje: randomFromInterval(1, 60)

            }
        })

    }

}

await main()