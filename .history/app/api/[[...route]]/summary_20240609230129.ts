import { Hono } from "hono";

const app = new Hono()
    .get(
        "/",
        async (c) => {
            return c.json({ summary: true });
        },
    );

export default app;