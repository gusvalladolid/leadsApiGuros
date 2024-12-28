import BaseRouter from './base/baseRouter'
import LeadController from '../controllers/LeadController'

class LeadRouter extends BaseRouter {
  public routes (): void {
    this.router.post('/', LeadController.create)
    this.router.put('/', LeadController.update)
    this.router.delete('/', LeadController.delete)
    this.router.get('/', LeadController.getAllLeads)
    this.router.get('/params', LeadController.getLeadBy)
    this.router.get('/status/:status', LeadController.getLeadByStatus)
  }
}

export default new LeadRouter().router
