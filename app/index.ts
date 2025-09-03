import { Hono } from "hono";
import { PrismaClient } from '@prisma/client';
import *as bcrypt from "bcryptjs";
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
    console.log('body.password(original) ', body.password);

    //encode password
    const passwordHash = await bcrypt.hash(body.password, 10);
    console.log('hash.password(after) ', passwordHash);
    body.password = passwordHash;
    console.log('body.password(replace)',body);

    c.status(503);
    return c.json({
        message:"demo",
        data:"server error"
    });

    //save to db
    body.Status = false;
    const result = await prisma.profile.create({
        data : body
    });
        
    //output 
    
    return c.json({
        message: "create profile completed",
        data: result
    });
});

export default app;