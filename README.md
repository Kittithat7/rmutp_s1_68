# Prisma

KITTITHAT KHUNKLANGSAENG
## Required
- Git
- docker & Docker compose
- postgreSQL
- node.js
- prisma
- VScode
    - PostgreSQL extensions(chris Kolkman)

## Runnig
## DATABASE
```
npx prisma studio
docker-compose up -d
```
### schema
``` 
npx prisma generate
npx prisma studio
npx prisma init --datasource-provider postgresql
npx prisma
```
## develop
```bash
npx prisma generate
```

### Update schema ###
1. update some schema 
2. Run this command `npx prisma genrate`
    2.1 `npx prisma studio` working but error ชื่อตารางเปลี่ยนแต่ popup แจ้งผิดพลาด
    2.2 connect db ชื่อตารางไม่เปลี่ยน
3. Run this command `npx prisma db push`
    3.1 `npx prisma studio` working ชื่อตารางเปลี่ยน
    3.2 connect db ชื่อตารางเปลี่ยน

### Narmal
```bash
`npx prisma genrate`
```
### hono
```
-npm install @hono/node-server
    -run
        npm install ts-node
        -tsc 
        npm install typescript
        npm install vitest

-install bcrypt package
    npm i bcryptjs