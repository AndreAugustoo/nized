import { z } from "zod";
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from "@hono/zod-validator";

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app
    .get("/hello", (c) => {
        return c.json({
        message: "Hello Next.js!",
    });
})
    .get("/hello/:test", (c) => {
        const test = c.req.param("test");

        return c.json({
            message: "Hello World",
            test: test,
        })
    })
    .post(
        "/",
        zValidator("json", z.object({
            name: z.string(),
            userId: z.string(),
        })),
    (c) => {
        return c.json({};)
    })

export const GET = handle(app);
export const POST = handle(app);