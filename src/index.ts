import express, { Application, Request, Response } from 'express'
import Database from './configs/database'
import leadRouter from './routes/leadRouter'

class App {
  public app: Application

  constructor () {
    this.app = express()
    this.syncDatabase()
    this.plugins()
    this.routes()
  }

  protected plugins (): void {
    this.app.use(express.json())
  }

  protected syncDatabase (): void {
    const db = new Database()
    db.sequelize?.sync()
      .then(() => {
        console.log('Database synchronized successfully.')
      })
      .catch((err: unknown) => {
        console.error('Error synchronizing the database:', err)
      })
  }

  protected routes (): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('Leads API is running!')
    })
    this.app.use('/api/v1/leads', leadRouter)
  }
}

const PORT: number = 3000
const app = new App().app

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
