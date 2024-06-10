import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware } from "@hono/clerk-auth";

const app = new Hono()
    .get(
        "/",
        clerkMiddleware();
        zValidator(
            "query",
            z.object({
                from: z.string().optional(),
                to: z.string().optional(),
                accountId: z.string().optional(),
            }),
        ),
        async (c) => {
            return c.json({ summary: true });
        },
    );

export default app;