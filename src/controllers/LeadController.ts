import { Request, Response } from 'express'
import { Lead } from '../models/Lead'
import { LeadRepository } from '../repository/leadRepository'
import { Status } from '../services/enums'

class LeadController {
  async create (req: Request, res: Response): Promise<void> {
    try {
      const newLead = new Lead()
      newLead.phoneNumber = req.body.phoneNumber
      newLead.email = req.body.email
      newLead.name = req.body.name
      newLead.status = req.body.status
      newLead.postalCode = req.body.postalCode
      newLead.dateOfBirth = req.body.dateOfBirth
      newLead.gender = req.body.gender
      newLead.vehicleData = req.body.vehicleData
      await new LeadRepository().save(newLead)
      res.status(201).json({
        message: 'Lead created successfully',
        status: 'Created!'
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: 'Internal Server Error'
      })
    }
  }

  async update (req: Request, res: Response): Promise<void> {
    try {
      const { phoneNumber, status } = req.body
      await new LeadRepository().updateStatus(+phoneNumber, status)
      res.status(200).json({
        message: 'Lead status updated successfully',
        status: '200'
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: 'Internal Server Error'
      })
    }
  }

  async delete (req: Request, res: Response): Promise<void> {
    try {
      const { phoneNumber } = req.body
      await new LeadRepository().delete(+phoneNumber)
      res.status(200).json({
        message: 'Lead deleted successfully',
        status: '200'
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: 'Internal Server Error'
      })
    }
  }

  async getLeadBy (req: Request, res: Response): Promise<void> {
    try {
      const { email, phoneNumber } = req.query

      if (phoneNumber !== undefined) {
        const lead = await new LeadRepository().findByPhoneNumber(+phoneNumber)
        res.status(200).json({
          message: 'Successfully retrieved lead',
          status: '200',
          data: lead
        })
      } else if (email !== undefined) {
        const lead = await new LeadRepository().findyByEmail(String(email))
        res.status(200).json({
          message: 'Successfully retrieved lead',
          status: '200',
          data: lead
        })
      } else {
        res.status(400).json({
          message: 'Invalid parameter',
          status: 'Invalid parameter'
        })
      }
    } catch (error) {
      res.status(404).json({
        message: 'Not Found',
        status: 'Not Found'
      })
    }
  }

  async getAllLeads (req: Request, res: Response): Promise<void> {
    try {
      const leads = await new LeadRepository().getAll()
      res.status(200).json({
        message: 'Successfully retrieved leads',
        status: '200',
        data: leads
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: 'Internal Server Error'
      })
    }
  }

  async getLeadByStatus (req: Request, res: Response): Promise<void> {
    try {
      const { status } = req.params
      const leads = await new LeadRepository().getByStatus(status as Status)
      if (leads.length === 0) {
        res.status(404).json({
          message: 'Not Found',
          status: '404'
        })
      }
      res.status(200).json({
        message: 'Successfully retrieved leads',
        status: '200',
        data: leads
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: 'Internal Server Error'
      })
    }
  }
}
export default new LeadController()
