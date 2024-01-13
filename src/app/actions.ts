"use server";

import { z } from "zod";
import { action } from "~/lib/safe-action";
import { db } from "~/server/db";

const meteorite_schema = z.object({
    start_date: z.string().datetime(),
    end_date: z.string().datetime(),
});

export const get_meteorites = action(meteorite_schema, async ({ start_date, end_date }) => {
    const result = await db.meteoriti.findMany({
        where: {
            dan: {
                gte: start_date,
                lte: end_date
            }
        },
    })

    return result;
})