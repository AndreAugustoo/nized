import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { accounts } from "@/db/schema";

const app = new Hono()
    .get("/", (c) => {
    return c.json({ accounts: [] });
    });

export default app;