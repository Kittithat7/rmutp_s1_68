import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello from Hono!');
});
app.get('/about', (c) => {return c.json({message: "Kittithat khunklangsaeng"})});
export default app;
