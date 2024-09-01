import express from 'express'
import { PrismaClient } from '@prisma/client'
import router from './routes/user.routes'

import { get } from 'env-var'
import chalk from 'chalk'

const app = express();
export const prisma = new PrismaClient(); //creating prisma interaction with mongodb

app.use(express.json())
app.use('/users', router)

const PORT = get("PORT").required().asString()

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(chalk.greenBright(`Server running on port ${PORT}`))
    console.log(chalk.whiteBright(`Documentation  : http://localhost:${PORT}/api-docs`));
  });
}

export default app;