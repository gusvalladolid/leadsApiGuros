import { Router } from 'express'
import IRouter from './routerInterface'

abstract class BaseRouter implements IRouter {
  public router: Router
  constructor () {
    this.router = Router()
    this.routes()
  }
  abstract routes (): void
}

export default BaseRouter
