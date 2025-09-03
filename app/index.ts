import { Hono } from "hono";
import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

const app = new Hono();
app.get('/', (c) => c.text('Hono!'));
app.get('/about', (c) => { return c.json({ message: "Kittithat Khunklangsaeng" }) });
app.get("/profile", async(c) => {
    // logic
    const profile = await prisma.profile.findMany();
    return c.json(profile);
});

app.post("/profile", async(c) => {
    //logic to create a profile
    const body = await c.req.json();
    console.log('input of profile ', body);
    
    return c.json({
        message: "create profile completed"
    });
});

export default app;