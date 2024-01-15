"use server";

import { z } from "zod";
import { action } from "~/lib/safe-action";
import { db } from "~/server/db";

const meteorite_schema = z.object({
    start_date: z.string().datetime(),
    end_date: z.string().datetime(),
});

export type MeteoritJS = {
    id_meteorit: number,
    trajanje: number,
    cas: Date,
};

export const get_meteorites = action(meteorite_schema, async ({ start_date, end_date }) => {
    const result = await db.meteoriti.findMany({
        where: {
            cas: {
                gte: start_date,
                lte: end_date
            }
        },
    })

    const js_result: MeteoritJS[] = result.map((item) => ({
        cas: item.cas,
        trajanje: item.trajanje.toNumber(),
        id_meteorit: item.id_meteorit
    }))

    return js_result;
})