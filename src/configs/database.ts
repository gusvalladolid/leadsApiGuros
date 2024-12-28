import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import { Lead } from '../models/Lead'
dotenv.config()

class Database {
  public sequelize: Sequelize | undefined

  /*
  private readonly POSTGRES_DB = process.env.POSTGRES_DB as string
  private readonly POSTGRES_USER = process.env.POSTGRES_USER as string
  private readonly POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string
  private readonly POSTGRES_HOST = process.env.POSTGRES_HOST as string
  private readonly POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number
*/
  protected POSTGRES_DB_LINK = process.env.POSTGRES_DB_LINK as string

  constructor () {
    this.connectToPostgres().then(() => {
      console.log(this.POSTGRES_DB_LINK)
      console.log('Database connection established.')
    }).catch((err: unknown) => {
      console.error('Error connecting to the database:', err)
    })
  }

  private async connectToPostgres (): Promise<void> {
    this.sequelize = new Sequelize(this.POSTGRES_DB_LINK, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: true
      },
      models: [Lead]
    })
    await this.sequelize.authenticate()
  }
}

export default Database
